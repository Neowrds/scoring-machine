let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePoints = 0
let guestPoints = 0

function addHomeOne() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function addHomeTwo() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function addHomeThree() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function addGuestOne() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function addGuestTwo() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addGuestThree() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

// MINUS------------------------------------

function minusHomeOne() {
    homePoints -= 1
    homeScore.textContent = homePoints

    if (homePoints < 0) {
        homeScore.textContent = "ERR"
        homePoints = 0
    }
}

function minusHomeTwo() {
    homePoints -= 2
    homeScore.textContent = homePoints

    if (homePoints < 0) {
        homeScore.textContent = "ERR"
        homePoints = 0
    }
}

function minusHomeThree() {
    homePoints -= 3
    homeScore.textContent = homePoints

    if (homePoints < 0) {
        homeScore.textContent = "ERR"
        homePoints = 0
    }
}

function minusGuestOne() {
    guestPoints -= 1
    guestScore.textContent = guestPoints

    if (guestPoints < 0) {
        guestScore.textContent = "ERR"
        guestPoints = 0
    }
}

function minusGuestTwo() {
    guestPoints -= 2
    guestScore.textContent = guestPoints

    if (guestPoints < 0) {
        guestScore.textContent = "ERR"
        guestPoints = 0
    }
}

function minusGuestThree() {
    guestPoints -= 3
    guestScore.textContent = guestPoints

    if (guestPoints < 0) {
        guestScore.textContent = "ERR"
        guestPoints = 0
    }
}

function resetScore() {
    guestPoints -= guestPoints
    homePoints -= homePoints
    guestScore.textContent = guestPoints
    homeScore.textContent = homePoints
}