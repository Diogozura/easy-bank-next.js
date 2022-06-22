export type Dados = {
    idPlayer: number;
    identificador: string;
    identificadorHexadecimal: string;
    namePlayer: string;
    playerBank: string;
    saldo: string;
    keyRoom: string;
    players: [
      {
        idPlayer: number;
        identificador: string;
        identificadorHexadecimal: string;
        namePlayer: string;
        playerBank: number;
        saldo: string;
      }
    ] 
  };