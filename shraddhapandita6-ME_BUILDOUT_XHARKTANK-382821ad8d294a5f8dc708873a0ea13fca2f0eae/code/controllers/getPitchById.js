const Pitch = require("../models/pitchSchema");
const Offer = require("../models/offerSchema");

const getOfferByPitchId = async (id) => {
  const offers = await Offer.find({pitchID: id})
      // .sort({createdAt: -1});

  return offers;
}

const getPitchById = async (req, res) => {
  const {id} = req.params;

  let pitch;
  try {
    pitch = await Pitch.findById(id);
  } catch (e) {
    return res.sendStatus(404);
  }

  if (!pitch) {
    return res.sendStatus(404);
  }

  const obj = {
    id: pitch._id,
    entrepreneur: pitch.entrepreneur,
    pitchTitle: pitch.pitchTitle,
    pitchIdea: pitch.pitchIdea,
    equity: pitch.equity,
    askAmount: pitch.askAmount,
  }

  obj.offers = (await getOfferByPitchId(pitch._id)).map((offer) => {
    return {
      id: offer._id,
      amount: offer.amount,
      investor: offer.investor,
      equity: offer.equity,
      comment: offer.comment,
    };
  });

  res.send(obj);
}

module.exports = getPitchById;
