"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ArcTimeline(props) {
  const {
    className,
    data = [],
    arcConfig = {},
    defaultActiveStep = {},
    ...restProps
  } = props;

  const {
    circleWidth = 5000,
    angleBetweenMinorSteps = 0.35, // degrees
    lineCountFillBetweenSteps = 10,
    boundaryPlaceholderLinesCount = 50,
  } = arcConfig;

  // start with 0 and set properly when data is ready
  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(0);

  // helper: normalize angle to [0, 360)
  const normalize = (deg) => ((deg % 360) + 360) % 360;

  // helper: check closeness to 0 (mod 360). threshold chosen relative to step spacing.
  const isAngleCloseToZero = (val) => {
    const norm = normalize(val);
    const dist = Math.min(norm, 360 - norm);
    // threshold: half the angleBetweenMinorSteps (so if step spacing is small, threshold is small)
    const threshold = Math.max(0.5, angleBetweenMinorSteps * 0.5);
    return dist < threshold;
  };

  // compute rotation whenever data or defaultActiveStep change
  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return;
    }

    // fallback = last group & last step
    const lastGroup = data[data.length - 1];
    const fallbackTime = lastGroup.time;
    const fallbackStepIndex = Math.max(0, (lastGroup.steps?.length ?? 1) - 1);

    // resolved active values (props.defaultActiveStep overrides fallback)
    const activeTime =
      defaultActiveStep && defaultActiveStep.time
        ? defaultActiveStep.time
        : fallbackTime;
    const activeStepIndex =
      defaultActiveStep && typeof defaultActiveStep.stepIndex === "number"
        ? defaultActiveStep.stepIndex
        : fallbackStepIndex;

    // find group index for activeTime, else fallback to last group
    const groupIndex = data.findIndex((g) => g.time === activeTime);
    let countBefore = 0;
    if (groupIndex === -1) {
      // not found -> rotate to fallback last item
      countBefore =
        data
          .slice(0, data.length - 1)
          .reduce((acc, g) => acc + (g.steps?.length ?? 0), 0) +
        fallbackStepIndex;
    } else {
      // sum steps before that group, then add active step index
      countBefore =
        data
          .slice(0, groupIndex)
          .reduce((acc, g) => acc + (g.steps?.length ?? 0), 0) +
        activeStepIndex;
    }

    const rotate =
      -1 *
        countBefore *
        angleBetweenMinorSteps *
        (lineCountFillBetweenSteps + 1) -
      angleBetweenMinorSteps * boundaryPlaceholderLinesCount;

    setCircleContainerRotateDeg(rotate);
  }, [
    data,
    defaultActiveStep,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
  ]);

  if (!Array.isArray(data) || data.length === 0) {
    return null; // or return a loader placeholder
  }

  return (
    <div
      {...restProps}
      className={cn("relative h-[380px] w-full overflow-hidden", className)}
    >
      <div
        style={{
          transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
          width: `${circleWidth}px`,
        }}
        className="absolute left-1/2 top-28 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
      >
        {data.map((line, lineIndex) => {
          return (
            <div key={`${lineIndex}`}>
              {line.steps.map((step, stepIndex) => {
                const angle =
                  angleBetweenMinorSteps *
                    (lineCountFillBetweenSteps + 1) *
                    (data
                      .slice(0, lineIndex)
                      .map((item) => item.steps.length)
                      .reduce((prev, current) => prev + current, 0) +
                      stepIndex) +
                  angleBetweenMinorSteps * boundaryPlaceholderLinesCount;

                const isLastStep =
                  lineIndex === data.length - 1 &&
                  stepIndex === line.steps.length - 1;
                const isFirstStep = lineIndex === 0 && stepIndex === 0;

                // NEW: normalized active test
                const isActive = isAngleCloseToZero(
                  angle + circleContainerRotateDeg
                );

                return (
                  <div key={`${lineIndex}-${stepIndex}`}>
                    {isFirstStep && (
                      <PlaceholderLines
                        isFirstStep={true}
                        isLastStep={false}
                        angle={angle}
                        angleBetweenMinorSteps={angleBetweenMinorSteps}
                        lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                        boundaryPlaceholderLinesCount={
                          boundaryPlaceholderLinesCount
                        }
                        lineIndex={lineIndex}
                        stepIndex={stepIndex}
                        circleWidth={circleWidth}
                        circleContainerRotateDeg={circleContainerRotateDeg}
                      />
                    )}

                    <div
                      className={cn(
                        "absolute left-1/2 top-0 -translate-x-1/2 cursor-pointer transition-all duration-200",
                        isActive ? "h-[120px] w-[2px]" : "h-16 w-[1.5px]"
                      )}
                      style={{
                        transformOrigin: `50% ${circleWidth / 2}px`,
                        transform: `rotate(${angle}deg)`,
                      }}
                      onClick={() => {
                        // click to center this step
                        setCircleContainerRotateDeg(-1 * angle);
                      }}
                    >
                      <div
                        className={cn(
                          "h-full w-full transition-colors duration-200",
                          isActive
                            ? "bg-[var(--step-line-active-color,#888888)] dark:bg-[var(--step-line-active-color,#9780ff)]"
                            : "bg-[var(--step-line-inactive-color,#b1b1b1)] dark:bg-[var(--step-line-inactive-color,#737373)]"
                        )}
                        style={{
                          transformOrigin: "center top",
                          transform: `rotate(${
                            -1 * angle - circleContainerRotateDeg
                          }deg)`,
                        }}
                      >
                        <div
                          className={cn(
                            "absolute bottom-0 left-1/2 aspect-square -translate-x-1/2",
                            isActive
                              ? "translate-y-[calc(100%_+_14px)] scale-[1.2] text-[var(--icon-active-color,#555555)] dark:text-[var(--icon-active-color,#d4d4d4)]"
                              : "translate-y-[calc(100%_+_4px)] scale-100 text-[var(--icon-inactive-color,#a3a3a3)] dark:text-[var(--icon-inactive-color,#a3a3a3)]"
                          )}
                        >
                          {step.icon}
                        </div>
                        <p
                          className={cn(
                            "absolute bottom-0 left-1/2 line-clamp-3 flex w-[240px] -translate-x-1/2 translate-y-[calc(100%_+_42px)] items-center justify-center text-center text-sm transition-opacity duration-300 ease-in",
                            "text-[var(--description-color,#555555)] dark:text-[var(--description-color,#d4d4d4)]",
                            isActive ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {step.content}
                        </p>
                      </div>

                      {stepIndex === 0 && (
                        <div
                          className={cn(
                            "absolute left-1/2 top-0 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap",
                            isActive
                              ? "text-[var(--time-active-color,#555555)] dark:text-[var(--time-active-color,#d4d4d4)]"
                              : "text-[var(--time-inactive-color,#a3a3a3)] dark:text-[var(--time-inactive-color,#a3a3a3)]"
                          )}
                        >
                          {line.time}
                        </div>
                      )}
                    </div>

                    <PlaceholderLines
                      isFirstStep={false}
                      isLastStep={isLastStep}
                      angle={angle}
                      angleBetweenMinorSteps={angleBetweenMinorSteps}
                      lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                      boundaryPlaceholderLinesCount={
                        boundaryPlaceholderLinesCount
                      }
                      lineIndex={lineIndex}
                      stepIndex={stepIndex}
                      circleWidth={circleWidth}
                      circleContainerRotateDeg={circleContainerRotateDeg}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlaceholderLines(props) {
  const {
    isFirstStep,
    isLastStep,
    angle,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    lineIndex,
    stepIndex,
    circleWidth,
    circleContainerRotateDeg,
  } = props;

  const getAngle = (index) => {
    if (isFirstStep) {
      return index * angleBetweenMinorSteps;
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps;
    }
  };

  const count =
    isLastStep || isFirstStep
      ? boundaryPlaceholderLinesCount
      : lineCountFillBetweenSteps;

  return (
    <>
      {Array(count)
        .fill("")
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex);
          return (
            <div
              key={`${lineIndex}-${stepIndex}-${fillIndex}`}
              className="absolute left-1/2 top-0 h-[34px] w-[1px] -translate-x-1/2"
              style={{
                transformOrigin: `50% ${circleWidth / 2}px`,
                transform: `rotate(${fillAngle}deg)`,
              }}
            >
              <div
                className="h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)] dark:bg-[var(--placeholder-line-color,#737373)]"
                style={{
                  transformOrigin: "center top",
                  transform: `rotate(${
                    -1 * fillAngle - circleContainerRotateDeg
                  }deg)`,
                }}
              ></div>
            </div>
          );
        })}
    </>
  );
}
