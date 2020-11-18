document.addEventListener('DOMContentLoaded', () => {

    console.log('Logging')

    // create counterState = {num:0,like:0}
    let counter = 0

    const numbers = {};

    // create likesState
    let likesState = 0

    // create pauseBtnState
    let pauseBtnState = "running"

    // select the counter display
    let counterDisplay = document.querySelector('#counter');

    // select incrementBtn
    let incrementBtn = document.querySelector('#plus');

    // select decrementBtn
    let decrementBtn = document.querySelector('#minus');

    // select the heartBtn
    let heartBtn = document.querySelector('#heart');

    // select like container
    let likesContainer = document.querySelector('.likes')

    // select the puase btn
    let pauseBtn  = document.querySelector('#pause')

    // select input form
    let commentInput = document.querySelector('#comment-input');

    // select comment container
    let commentContainer = document.querySelector('#list')

    // create  comment ulContainer and append to comments
    let commentList = document.createElement('ul')

    let counterInterval;

    // set Timeout to check the counter and heart and update the likes
    function heartBeatChecker(){

            if (!numbers[counter]){
                let counterState = {num:counter, likes: likesState}
                numbers[counter] = counterState
            } else {
                numbers[counter].likes = likesState
            }

            // update number and count in li
            let counterLikeDisplay = document.createElement('li');

            let text =  document.createTextNode(`${numbers[counter].num} - likes: ${numbers[counter].likes}`);

            counterLikeDisplay.appendChild(text);

            likesContainer.appendChild( counterLikeDisplay);

            likesState=0
    }

    function startCounter(){

        counterDisplay.innerText = 0

        // start Counter
        counterInerval = setInterval( ()=> {
            // increment counter  +1
            counter++

            // update the counter display
            counterDisplay.innerText = counter

            heartBeatChecker()

        }, 1000)

    }

    // create comment
    function createComment(){
        // select inputValue on form submit

            // create comment li

            // append to container as adjancet html

    }



    function main(){

        startCounter()

        // begin heart like checker
        let heartBeat = setTimeout( heartBeatChecker, 500)

        // incrementBtn
        incrementBtn.addEventListener('click', () => {
            counter++;
        })

        // decrementBtn
        decrementBtn.addEventListener('click', () => {
            counter--;
        })

        // heartBtn
        heartBtn.addEventListener('click',()=>{
            likesState++
            console.log(likesState)
        })

        // pauseBtn,
        pauseBtn.addEventListener('click', () => {

            // if state running
            if(pauseBtnState === 'running') {

                // clear interval to cancel set interval,
                clearInterval(counterInerval)


                //  set to pause
                pauseBtnState = "pause"

                pauseBtn.innerText = "resume"

                // disable incrementBtn
                incrementBtn.style.display="none"

                // disable decrementBtn
                decrementBtn.style.display="none"
                // disable heartBtn
                heartBtn.style.display="none"

                // set pause Btn to resume
                pauseBtnState = "resume"

                return null
            }

            if(pauseBtnState === 'resume'){

                // set to running
                pauseBtnState = "running"

                // disable incrementBtn
                incrementBtn.style.display="initial"

                // disable decrementBtn
                decrementBtn.style.display="initial"

                // disable heartBtn
                heartBtn.style.display="initial"

                pauseBtn.innerText = "pause"

                // reset Counter state to zero
                counter = 0

                startCounter()

            }
        })

        // add event for comment Add


    } // end of main





    main()

}) // end of load event
