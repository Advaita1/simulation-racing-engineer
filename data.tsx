export interface setupEngineerData {
  understeer: {
    slow: {
      entry: string[],
      apex: string[],
      exit: string[]
    },
    fast: {
      entry: string[],
      apex: string[],
      exit: string[]
    }
  };
  oversteer: {
    slow: {
      entry: string[],
      apex: string[],
      exit: string[]
    },
    fast: {
      entry: string[],
      apex: string[],
      exit: string[]
    }
  };
}

export const data: setupEngineerData = {
  "understeer": {
    "slow": {
      "entry": [
        "move brake bias towards the rear",
        "1 click higher front bumpstop range",
        "1 click lower front bumpstop rate",
        "1 click lower front wheel rate",
        "1 click lower front antiroll bar",
        "1 click lower front ride height",
        "2 clicks higher rear ride height",
        "lower differential preload",
        "increase front negative camber",
        "decrease rear negative camber",
        "decrease rear toe"
      ],
      "apex": [
        "1 click higher front bumpstop range",
        "1 click lower front bumpstop rate",
        "1 click lower front wheel rate",
        "1 click lower front antiroll bar",
        "1 click lower front ride height",
        "2 clicks higher rear ride height",
        "lower differential preload",
        "increase front negative camber",
        "decrease rear negative camber",
        "decrease rear toe"
      ],
      "exit": [
        "1 click higher front bumpstop range",
        "1 click lower front bumpstop rate",
        "Reduce traction control",
        "1 click lower front wheel rate",
        "1 click lower front antiroll bar",
        "1 click higher rear antiroll bar",
        "1 click lower front ride height",
        "2 clicks higher rear ride height",
        "increase differential preload",
        "increase front negative camber",
        "decrease rear negative camber",
        "decrease rear toe"
      ]
    },
    "fast": {
      "entry": [
        "1 click lower front ride height",
        "1 click lower rear wing",
        "2 clicks higher rear ride height",
        "1 click higher front bumpstop range",
        "1 click lower front bumpstop rate",
        "move brake bias towards the rear",
        "lower differential preload",
        "increase front negative camber",
        "decrease rear negative camber",
        "decrease rear toe"
      ],
      "apex": [
        "1 click lower front ride height",
        "1 click lower rear wing",
        "2 clicks higher rear ride height",
        "1 click higher front bumpstop range",
        "1 click lower front bumpstop rate",
        "lower differential preload",
        "increase front negative camber",
        "decrease rear negative camber",
        "decrease rear toe"
      ],
      "exit": [
        "1 click lower front ride height",
        "1 click lower rear wing",
        "2 clicks higher rear ride height",
        "lower rear bumpstop range to 15 and then lower one click at a time and check results (try to keep rear bumpstop rate as low as possible)",
        "1 click higher front bumpstop range",
        "1 click lower front bumpstop rate",
        "reduce traction control",
        "lower differential preload",
        "increase front negative camber",
        "decrease rear negative camber",
        "decrease rear toe"
      ]
    }
  },
  "oversteer": {
    "slow": {
      "entry": [
        "move brake bias towards the front",
        "1 click lower front bumpstop range",
        "1 click higher front bumpstop rate",
        "1 click higher front wheel rate",
        "2 clicks lower rear ride height",
        "1 click higher front antiroll bar",
        "1 click higher front ride height",
        "increase differential preload",
        "decrease front negative camber",
        "increase rear negative camber",
        "increase rear toe"
      ],
      "apex": [
        "1 click higher front wheel rate",
        "2 clicks lower rear ride height",
        "1 click higher front antiroll bar",
        "1 click higher front ride height",
        "1 click lower front bumpstop range",
        "1 click higher front bumpstop rate",
        "increase differential preload",
        "decrease front negative camber",
        "increase rear negative camber",
        "increase rear toe"
      ],
      "exit": [
        "raise traction control",
        "max rear bumpstop range (avoid touching the bumpstops under acceleration)",
        "2 clicks lower rear ride height",
        "1 click higher front wheel rate",
        "1 click higher front antiroll bar",
        "1 click higher front ride height",
        "1 click lower front bumpstop range",
        "1 click higher front bumpstop rate",
        "lower differential preload",
        "decrease front negative camber",
        "increase rear toe"
      ]
    },
    "fast": {
      "entry": [
        "1 click higher rear wing",
        "1 click higher front ride height",
        "2 clicks lower rear ride height",
        "1 click lower front bumpstop range",
        "1 click higher front bumpstop rate",
        "move brake bias towards the front",
        "increase differential preload",
        "decrease front negative camber",
        "increase rear negative camber",
        "increase rear toe"
      ],
      "apex": [
        "1 click higher rear wing",
        "1 click higher front ride height",
        "2 clicks lower rear ride height",
        "1 click lower front bumpstop range",
        "1 click higher front bumpstop rate",
        "increase differential preload",
        "decrease front negative camber",
        "increase rear negative camber",
        "increase rear toe"
      ],
      "exit": [
        "1 click higher rear wing",
        "2 clicks lower rear ride height",
        "1 click higher front ride height",
        "1 click lower front bumpstop range",
        "1 click higher front bumpstop rate",
        "decrease front negative camber",
        "increase rear toe"
      ]
    }
  }
};