const getGoals = (req, res) => {
    res.json({ message: 'Get Goals'})
}
const setGoal = (req, res) => {
    res.json({ message: 'Set Goals'})
}
const updateGoal = (req, res) => {
    res.json({ message: `Update Goals ${req.params.id}`})
}
const deleteGoal = (req, res) => {
    res.json({ message: `Delete Goals ${req.params.id}`})
}

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}