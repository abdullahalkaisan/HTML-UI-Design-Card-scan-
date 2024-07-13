const video_box = document.querySelector('.video_box');
const headerInfo = document.querySelector('.headerInfo');
const lotti = document.querySelector('.lotti');
const testWrap = document.querySelector('.testWrap');
const allowBtn = document.querySelector('#allowBtn');
const video = document.getElementById('videoElement');
const accessCameraContainer = document.querySelector('.accessCameraContainer');

accessCameraContainer.classList.add('flex');



const constraints = {
    video: {
        facingMode: { exact: "environment" }
    }
};
async function loadStream() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, facingMode: { exact: "environment" } }); // 'user' for front camera, 'environment' for back camera
        video.srcObject = stream;
        testWrap.classList.remove('hidden');
        testWrap.classList.add('flex');

        accessCameraContainer.classList.remove('flex');
        accessCameraContainer.classList.add('hidden');

    } catch (error) {
        console.error('Error accessing the camera', error);
    }
}
loadStream();
allowBtn.addEventListener('click', loadStream);



if(video.srcObject){
    alert()
}


function getRandomNumber() {
    return Math.floor(Math.random() * 2);
}



let randomNumber = getRandomNumber();
// let randomNumber = 0;




const tryAgainBtn = document.getElementById('tryAgainBtn');
const nextBtn = document.getElementById('nextBtn');




function loading() {

    setTimeout(()=>
        {
            document.querySelector('.loader').classList.add('hidden');
            document.querySelector('.progress-loader').classList.remove('hidden');
        }
    ,3000)


    setTimeout(()=>
        {
            headerInfo.classList.remove('hidden')
        }
    ,5000)




    setTimeout(()=>
        {
            document.querySelector('.progress-loader').classList.add('hidden');

            if(randomNumber === 0){
                tryAgainBtn.classList.remove('hidden')
                tryAgainBtn.classList.add('flex')
                headerInfo.classList.add('hidden')

            }else{
                nextBtn.classList.remove('hidden')
                nextBtn.classList.add('flex')
                video_box.classList.add('hidden')
                video.classList.add('hidden')
                headerInfo.classList.add('hidden')
                lotti.classList.remove('hidden')

            }
        }
    ,11000)



}

loading();


tryAgainBtn.addEventListener('click', ()=>{


    getRandomNumber()


    tryAgainBtn.classList.add('hidden')
    tryAgainBtn.classList.remove('flex')


        document.querySelector('.progress-loader').classList.remove('hidden');
        headerInfo.classList.remove('hidden')

        setTimeout(()=>

            {

                if(randomNumber === 0){
                    tryAgainBtn.classList.add('hidden')
                    tryAgainBtn.classList.add('flex')

                }else{
                    nextBtn.classList.remove('hidden')
                    nextBtn.classList.add('flex')
                    video.classList.add('hidden')
                }
                document.querySelector('.progress-loader').classList.add('hidden');
                headerInfo.classList.add('hidden')
            }
        ,8000)


})




