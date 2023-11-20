const list = document.getElementById("list")

const input = document.getElementById("product")

const btn = document.getElementById('submit')

const error = document.querySelector('.error')

const errorBtn = document.querySelector('.override')

let list2 = []


const listCheck = function (txt) {



    if (list2.length === 0) {

        return 0;

    }

    else {



        for (let i = 0; i < list2.length; i++) {



            if (txt === list2[i]) {


                return 1;



            }
        }

        return 0;

    }

}


const add = function () {

    if (input.value === '') {

        return

    }

    const li = document.createElement('li')

    li.appendChild(document.createTextNode(input.value))

    list2.push(input.value)

    list.appendChild(li)

    input.value = ''

}

const add2 = function () {

    if (input.value === '') {

        return

    }

    const li = document.createElement('li')

    li.appendChild(document.createTextNode(input.value + '*'))

    list2.push(input.value + '*')

    list.appendChild(li)

    input.value = ''

}

btn.addEventListener('click', (e) => {

    e.preventDefault
    if (input.value === '') {


    } else {

        if (listCheck(input.value) === 0) {

            add()

        } else {

            /*const li = document.createElement('li')

            li.appendChild(document.createTextNode(listCheck(input.value)))

            list2.push(listCheck(input.value))

            list.appendChild(li)
            */

            error.innerHTML = ('<h2 class="error active">Already entered</h2> ')

            errorBtn.innerHTML = ('<button class="override active">Add Anyway</button>')

            setInterval(() => {

                error.innerHTML = ('')

                errorBtn.innerHTML = ('')

            }, 10000);

            clearInterval

            errorBtn.addEventListener('click', (e) => {

                error.innerHTML = ('')

                errorBtn.innerHTML = ('')

                add2()




            })

        }

    }


    console.log(list2)



})

