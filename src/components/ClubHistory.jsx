import { ArcTimeline } from "../components/ui/arc-timeline";
import { timelineData } from "../data/timelineData";

import {
  RocketIcon,
  CubeIcon,
  LockClosedIcon,
  GlobeIcon,
  GearIcon,
  LightningBoltIcon,
  StarIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";

const icons = {
  rocket: <RocketIcon width={20} height={20} />,
  cube: <CubeIcon width={20} height={20} />,
  lock: <LockClosedIcon width={20} height={20} />,
  globe: <GlobeIcon width={20} height={20} />,
  gear: <GearIcon width={20} height={20} />,
  lightning: <LightningBoltIcon width={20} height={20} />,
  star: <StarIcon width={20} height={20} />,
  magic: <MagicWandIcon width={20} height={20} />,
};

export function ArcTimeHistory() {
  const timelineWithIcons = timelineData.map((item) => ({
    ...item,
    steps: item.steps.map((step) => ({
      ...step,
      icon: icons[step.icon],
    })),
  }));

  return (
    <ArcTimeline
      data={timelineWithIcons}
      defaultActiveStep={{ time: "2024 Q4", stepIndex: 1 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
  );
}
