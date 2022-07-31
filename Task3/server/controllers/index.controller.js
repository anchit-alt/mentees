// Add your routes here
const Workout = require('../models/index');
const mongoose = require('mongoose');

const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such entry' });
    }
    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ error: 'No Such entry' });
    }
    res.status(200).json(workout);
};

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({
        createdAt: -1,
    });

    res.status(200).json(workouts);
};

const createWorkout = async (req, res) => {
    const { name, notes } = req.body;
    try {
        const workout = await Workout.create({ name, notes });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' });
    }

    res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    }
    const workout = await Workout.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );
    if (!workout) {
        return res.status(404).json({ error: 'No such workout' });
    }
    res.status(200).json(workout);
};

module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
};

module.exports.indexRoute = (req, res) => {
    res.send('Welcome to the backend');
};

module.exports.helloRoute = (req, res) => {
    res.json({ msg: `Hey there ${req.params.id}` });
};
