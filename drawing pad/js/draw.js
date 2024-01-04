const draw = {
  path: ({ctx, path, color}) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(...path[0]);
    for(let i=1; i<path.length; i++){
      ctx.lineTo(...path[i]);
    }
    ctx.lineCap =  'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  },

  paths: ({ctx, paths, color}) => {
    for(const path of paths){
      draw.path({ctx: ctx, path: path, color: color})
    }
  }

}



// draw.path = ({ctx, path, color}) => {
//   ctx.strokeStyle = color;
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.moveTo(...path[0]);
//   for(let i=1; i<path.length; i++){
//     ctx.lineTo(...path[i]);
//   }
//   ctx.stroke();
// }