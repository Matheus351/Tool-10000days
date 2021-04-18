function validate(input){
  let val  = input.value
  val = val.replace(/[A-Z]/gi,"")
  if(val.length>10){
     val = val.slice(0,-1)
  }
  val = val.replace(/(\d{2})(\d{2})(\d{4})/,"$1/$2/$3")
  input.value = val
}
