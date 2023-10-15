const Pitch = require("../models/pitchSchema");
const Offer = require("../models/offerSchema");

const getOfferByPitchId = async (id) => {
  const offers = await Offer.find({pitchID: id})
      // .sort({createdAt: -1});

  return offers;
}

const getPitch = async (req, res) => {
  const pitches = await Pitch.find({})
      .sort({_id: -1});

  const resposeBody = [];
  for (let pitch of pitches) {

    const obj = {
      id: pitch._id,
      entrepreneur: pitch.entrepreneur,
      pitchTitle: pitch.pitchTitle,
      pitchIdea: pitch.pitchIdea,
      equity: pitch.equity,
      askAmount: pitch.askAmount,
    };

    obj.offers = (await getOfferByPitchId(pitch._id)).map((offer) => {
      return {
        id: offer._id,
        amount: offer.amount,
        investor: offer.investor,
        equity: offer.equity,
        comment: offer.comment,
      };
    });

    resposeBody.push(obj);
  }

  res.send(resposeBody);
}

module.exports = getPitch;
