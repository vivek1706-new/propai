// api/ping.js — minimal test function
module.exports = (req, res) => {
    res.status(200).json({ ok: true, time: new Date().toISOString() });
};
