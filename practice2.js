// Callback function

const payment = false;
const marks = 80;

function courseEnroll(callback) {
    console.log(`You are on the way`);
    setTimeout(() => {
        if (payment) {
            console.log(`Payment Successfull`)
            callback()
        }
        else {
            console.log(`Payment failed`)
            callback()
        }
    }, 2000);
}

function courseProgress(callback) {
    console.log(`Course on progress`)

    setTimeout(function () {
        if (marks >= 80) {
            console.log(`Excellent`)
            callback()
        }
        else {
            console.log(`Mark is not sufficient to get certificate`)
        }
    },3000)
}

function courseCertificate() {
    console.log(`Preparing the certificate`)

    setTimeout(function () {
        console.log(`Congrats!`)
    }, 1000)
}

courseEnroll(function () {
    courseProgress(courseCertificate)
})




