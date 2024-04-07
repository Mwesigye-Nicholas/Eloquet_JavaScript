/**
 * chessBoard - prints a chess 
 * board on the console
 *
 * Return: 0
 */

const chessBoard = () => {
    let chess = '';

    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
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
chessBoard();
