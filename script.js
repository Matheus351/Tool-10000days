function validate(input){
  let val  = input.value
  val = val.replace(/[A-Z]/gi,"")
  if(val.length>10){
     val = val.slice(0,-1)
  }
  val = val.replace(/(\d{2})(\d{2})(\d{4})/,"$1/$2/$3")
  input.value = val
}
 function getdays(){
  let date = document.getElementById("input").value
  let dateFormat = date.split("/")
  let day = dateFormat[0]
  let month = dateFormat[1]
  let year = dateFormat[2]

  let bornIn = new Date(year,month-1,day)

  let today = new Date()
  let diff = Math.abs( today.getTime() - bornIn.getTime())
  let daysCount =Math.ceil( diff/(1000*60*60*24))-1
  let div = document.getElementById("block")
  div.style.border='2px solid white'
  div.style.maxWidth="50%"
  div.style.margin="0 auto"
  let p = document.getElementById("msg")
  p.innerHTML=`Você já viveu: ${daysCount} dias`
  p.style.fontWeight="bold"
  bornIn.setDate(bornIn.getDate() + 10000);
  let p2 = document.getElementById("ten")
  p2.innerHTML=`Seu dia 10.000 será em : ${ bornIn.toLocaleString('pt', {day: 'numeric', month: 'short', year: 'numeric'})}`
  p2.style.fontWeight="bold"
}
