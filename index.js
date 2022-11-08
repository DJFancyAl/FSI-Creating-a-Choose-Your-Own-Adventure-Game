//Your Code here
function startAdventure() {
    let answer = window.prompt('Do you head left or right?');

    switch(answer){
        case('left'):
            var secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path? ("follow" or "continue")`);
            break;
        case('right'):
            var secondAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take? ("past the dragon" or "away from the dragon")`)
            break;
        default:
            window.alert("Wrong answer!")
            startAdventure()
        }
    
    switch(secondAnswer){
        case('follow'):
            var thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are with you staying, but you wonder if you should alert the world to this magical safe haven. ("stay" or "spread the word")`);
            break;
        case('continue'):
            var thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? ("ladder" or "staircase")`)
            break;
        case('past the dragon'):
            var thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to stay or run: ("stay put" or "run")`)
            break;
        case('away from the dragon'):
            var thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? ("draw it" or "pick it")`)
            break;
        default:
            window.alert("Wrong answer!")
            startAdventure()
        }
    
    switch(thirdAnswer){
        case('stay'):
            window.alert(`You live happily amongst the cats for the rest of your days.`)
            break;
        case('spread the word'):
            window.alert(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`)
            break;
        case('ladder'):
            window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`)
            break;
        case('staircase'):
            window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
            break;
        case('stay put'):
            window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
            break;
        case('run'):
            window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
            break;
        case('draw it'):
            window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
            break;
        case('pick it'):
            window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
            break;
        default:
            window.alert("Wrong Answer!")
            startAdventure()
    }
    window.alert('ADVENTURE COMPLETED!')
}

startAdventure()
    