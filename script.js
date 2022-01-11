const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

const selectMediaStream = async () => {
    try
    {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => 
        {
            videoElement.play();
        }
    }
    catch(error)
    {
        console.log("Whoops! error.", error);
    }
};

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});


selectMediaStream();
