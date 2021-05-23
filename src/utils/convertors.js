export function getHumanDate(unixTime){
  const date = new Date(unixTime);
  return ` 
    ${date.getHours()}:${date.getMinutes()<10 ? '0'+ date.getMinutes():date.getMinutes()} |
    ${date.getDate()}/${date.getMonth()+1}/${date.getUTCFullYear()}`;
}