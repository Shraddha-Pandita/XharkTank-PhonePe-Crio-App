const Pitch = require("../models/pitchSchema");
const Offer = require("../models/offerSchema");

const makeOffer = async (req, res) => {

  const {id} = req.params;

  const { amount, investor, equity, comment } = req.body;

  let pitch;
  try {
    pitch = await Pitch.findOne({
      _id:id,
    });
  } catch (e) {
    return res.sendStatus(404);
  }

  if (!pitch) {
    return res.sendStatus(404);
  }

  let offer;
  try {
    offer = new Offer({
      amount,
      investor,
      equity,
      comment,
      pitchID: id,
    });
    await offer.save();
  } catch (e) {
    return res.sendStatus(400);
  }

  res.status(201).send({
    id: offer._id,
  });
}

module.exports = makeOffer;
