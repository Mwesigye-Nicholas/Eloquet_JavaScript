/**
 * chessBoard - prints a chess 
 * board on the console
 *
 * Return: 0
 */

const chessBoard = (x) => {
    let chess = '';

    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++){
            if ((i + j) % 2 === 0){
                chess += ' ';
            }
            else{
                chess += '#';
            }
        }
     chess += '\n';
    }
  console.log(chess);
  return 0;  
}
chessBoard(6);
