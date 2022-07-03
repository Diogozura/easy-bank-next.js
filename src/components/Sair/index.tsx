import router from "next/router";
import react from "react";
import { Botao } from "../Botao";
import { tokenService } from '../../services/auth/tokenService'
import { authService } from "../../services/auth/authService";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Image from "next/image";
import { AvatarCores, Form } from '../../../pages/Jogador';
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    textAlign:'center',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
  p: 4,
  ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
    width: '80%',
  }
  };

export default function Sair({data}) {
    function handleClick() {
        authService.Sair()
            .then(() => {
                                console.log('Player saiu')
                                tokenService.delete()
                                router.push('/')
                            })
                            .catch((error) => {
                            console.log(error)
                        })
        
    }
  

    const [values, setValues] = react.useState({
        user: '',
        cores: '',
    })

    function handleChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValues((currenetValues) => {
            return {
                ...currenetValues,
                [fieldName]: fieldValue,
            }
        })
    }
    const [modal, setModal] = react.useState(false)
    const toggle = () => setModal(!modal)

    const conteudo = data.players?.map((jogadores) => (
        <>
            <AvatarCores key={jogadores.idPlayer}>
                <label
                    htmlFor={jogadores.identificador}>
                    <Image
                        width={60}
                        height={60}
                        src={`./avatar/${jogadores.identificador}.svg`}

                    />
                </label>
                <input
                    name="user"
                    type="radio"
                    id={jogadores.identificador}
                    value={jogadores.idPlayer || ''}
                    onChange={handleChange}
                />

            </AvatarCores>
        </>
    ))

    const troca = () => {
        return (
            <Form onSubmit={(event) => {
                
                event.preventDefault();
                console.log(values)
                authService.TrocaPlayer({
                    idPlayerPara: parseInt(values.user),
                })
                    .then(() => {
                        authService.Sair()
                            .then(() => {
                                console.log('deu certo')
                                // tokenService.delete()
                                // router.push('/')
                            })
                            .catch((error) => {
                            console.log(error)
                        })
                        

                        
                    })
                    .catch((err) => {
                        alert('algo não saiu como o previsto ')
                    })

            }}>

                Passar Batão para o novo Banco
                {conteudo}
                <Botao >
                    Trocar e sair
                </Botao>
            </Form>
        )
    }

    const sair = () => {
        return (
            <>
                <h3>Tem certeza que deseja sair?</h3>
                <Botao
                key={data.idPlayer}
                onClick={handleClick}
              >
                Sair
            </Botao>
            </>
            
           
        )
    }
    const [open, setOpen] = react.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
    return (
        <>

        <Botao onClick={handleOpen} variant="outlined" color="error"><ExitToAppIcon/>Sair</Botao>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           SAIR
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        {data.playerBank == 1 && data.players.length > 0 ? troca() :   sair()}
                        <Button onClick={handleClose}>
                        Cancelar
                        </Button>
          </Typography>
        </Box>
      </Modal>
        </>

    )
}