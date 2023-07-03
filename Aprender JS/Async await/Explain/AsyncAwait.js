//const variale  = await significa que el codigo va a tomer tiempo;

async function resquestHandler(req, res) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.taskId);
    tasks.completed = true;

    await tasks.save();

    res.send("Tarea completada");
  } catch (error) {
    res.send(error);
  }
}

