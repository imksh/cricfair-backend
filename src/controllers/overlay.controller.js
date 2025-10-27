let data = {
  batsman1: {},
  batsman2: {},
  team1: "",
  team2: "",
  score: "",
  over: "",
  target: "",
  remainingBalls: "",
  runRate: "",
  run:"",
  showLive: "",
  inning: "",
  bowler: {},
};

export const addScore = (req, res) => {
  try {
    const {
      batsman1,
      batsman2,
      team1,
      team2,
      score,
      over,
      target,
      remainingBalls,
      runRate,
      run,
      showLive,
      inning,
      bowler,
    } = req.body;

    data = {
      batsman1,
      batsman2,
      team1,
      team2,
      score,
      over,
      target,
      remainingBalls,
      runRate,
      run,
      showLive,
      inning,
      bowler,
    };

    console.log("addScore: ", data);

    res.status(200).json({ message: "Score added successfully", data });
  } catch (error) {
    console.error("Error in addScore control: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getScore = (req, res) => {
  try {
    console.log("getScore: ", data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getScore control: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
