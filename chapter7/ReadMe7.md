# Measuring a robot

It’s hard to objectively compare robots by just letting them solve a few scenarios.
Maybe one robot just happened to get easier tasks or the kind of tasks
that it is good at, whereas the other didn’t.  
Write a function `compareRobots` that takes **two robots** (and their starting
memory). It should generate **100 tasks** and let each of the robots solve each
of these tasks. When done, it should output the **average number** of steps each
robot took per task.  
For the sake of fairness, make sure you give each task to both robots, rather
than generating different tasks per robot.  

# Robot efficiency  

Can you write a robot that finishes the delivery task faster than `goalOrientedRobot`
? If you observe that robot’s behavior, what *obviously stupid things* does it
do? How could those be improved?  
If you solved the previous exercise, you might want to use your `compareRobots`
function to verify whether you improved the robot.  

