function equation(val)
    {
        document.getElementById("result").value+=val
    }
function solve()
    {
        let display = document.getElementById("result").value
        let displayValue = eval(display)
        document.getElementById("result").value = displayValue
    }

//function that clear the display
function clr()
    {
        document.getElementById("result").value = ""
    }