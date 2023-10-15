const Pitch = require("../models/pitchSchema");

const createPitch = async (req, res) => {

  const {
    entrepreneur,
    pitchTitle,
    pitchIdea,
    askAmount,
    equity,
  } = req.body;

  let pitch;
  try {
    pitch = new Pitch({
      entrepreneur,
      pitchTitle,
      pitchIdea,
      askAmount,
      equity,
    });

    await pitch.save();
  } catch (e) {
    return res.sendStatus(400);
  }

  res.status(201).send({
    id: pitch._id,
  });
}

module.exports = createPitch;
