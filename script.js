let habits = [];

let addBtn = document.getElementById("addBtn");
let habitList = document.getElementById("habitList");

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function showHabits() {

    habitList.innerHTML = "";

    if (habits.length == 0) {
        habitList.innerHTML = `
            <div class="empty">
                <p>No habits added yet.</p>
            </div>
        `;
        return;
    }

    habits.forEach(function (habit, index) {

        let html = `
            <div class="habit">

                <div class="habit-top">

                    <div>
                        <h3>${habit.name}</h3>
                        <p class="goal">Goal: ${habit.goal}</p>
                    </div>

                    <button class="delete" onclick="deleteHabit(${index})">
                        Delete
                    </button>

                </div>

                <div class="days">
        `;

        for (let i = 0; i < days.length; i++) {

            html += `
                <div class="day">

                    <p>${days[i]}</p>

                    <input
                        type="checkbox"
                        ${habit.days[i] ? "checked" : ""}
                        onchange="changeDay(${index}, ${i})"
                    >

                </div>
            `;
        }

        html += `
                </div>
            </div>
        `;

        habitList.innerHTML += html;
    });
}

function addHabit() {

    let name = document.getElementById("habitName").value.trim();
    let goal = document.getElementById("habitGoal").value.trim();

    if (name == "" || goal == "") {
        alert("Please enter the habit and goal.");
        return;
    }

    let newHabit = {
        name: name,
        goal: goal,
        days: [false, false, false, false, false, false, false]
    };

    habits.push(newHabit);

    document.getElementById("habitName").value = "";
    document.getElementById("habitGoal").value = "";

    showHabits();
}

function changeDay(habitIndex, dayIndex) {

    habits[habitIndex].days[dayIndex] =
        !habits[habitIndex].days[dayIndex];
}

function deleteHabit(index) {

    habits.splice(index, 1);

    showHabits();
}

addBtn.onclick = addHabit;

showHabits();