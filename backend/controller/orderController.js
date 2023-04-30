const { orderModel } = require("../model/orderModel");

async function postOrders(req, res) {
  try {
    let data = new orderModel(req.body);
    await data.save();
    res.json(await orderModel.find());
  } catch (error) {
    res.send(error);
  }
}

async function postCompletedOrders(req,res) {
  try {
    let data = new orderModel(req.body);
    await data.save();
    res.json("Posted");
  } catch (error) {
    res.send(error);
  }
}

async function getBuyOrders(req, res) {
  try {
    res.json(await orderModel.find({ type: "buyer" }));
  } catch (error) {
    res.send(error);
  }
}

async function getSellOrders(req, res) {
  try {
    res.json(await orderModel.find({ type: "seller" }));
  } catch (error) {
    res.send(error);
  }
}
async function getCompletedOrder(req, res) {
  try {
    res.json(await orderModel.find({ status: "completed" }));
  } catch (error) {
    res.send(error);
  }
}

async function updateSellOrders(req, res) {
  const { id } = req.params;
  try {
    await orderModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
}

async function updateBuyOrders(req, res) {
  const { id } = req.params;
  try {
    await orderModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
}

async function deleteBuyOrders(req, res) {
  const { id } = req.params;
  try {
    await orderModel.findByIdAndDelete({ _id: id });
    res.status(201).send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
}

async function deleteSellOrders(req, res) {
  const { id } = req.params;
  try {
    await orderModel.findByIdAndDelete({ _id: id });
    res.status(201).send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
}

async function updateAll(req, res) {
  const updatedData = req.body;
  try {
    const updateOps = updatedData.map(({ _id, quantity }) => ({
      updateOne: {
        filter: { _id: _id },
        update: {
          $set: { quantity: quantity },
          $unset: quantity === 0 ? { type: "" } : {},
        },
      },
    }));

    let updated = await orderModel.bulkWrite(updateOps);
    res.json(updated);
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  postOrders,
  getSellOrders,
  getBuyOrders,
  updateBuyOrders,
  updateSellOrders,
  deleteBuyOrders,
  deleteSellOrders,
  getCompletedOrder,
  updateAll,
  postCompletedOrders,
};
