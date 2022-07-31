const express = require('express');
const router = express.Router();
const { indexRoute, helloRoute } = require('../controllers/index.controller');
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/index.controller');

router.get('/', indexRoute);
router.get('/', getWorkouts);
router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.get('/:id', helloRoute);
router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);
module.exports = router;
