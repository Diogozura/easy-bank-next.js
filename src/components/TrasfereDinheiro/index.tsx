import Image from 'next/image';
import react from 'react'
import { authService } from '../../services/auth/authService';
import { Botao } from '../Botao';
import { Input } from '../Input';
import nookies from 'nookies'
import { useRouter } from 'next/router';
import { SaldoFlag, BoxTrasnfere } from '../BoxJogador';
import { tokenService } from '../../services/auth/tokenService';
import styleds from 'styled-components';
import { AvatarCores, Coress, Form } from '../../../pages/Jogador';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { NumberFormatCustom } from '../../../pages/criarSala';
import { toast } from 'react-toastify';

function success() {
  toast.success('🦄 transação Concluída!', {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
function error() {
  toast.error('🦄 Error na Transação!', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  



export default function TransfereDinheiro({ data }, ctx = null) {
    const [isChecked, setChecked] = react.useState(false)
    console.log(isChecked)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  
  
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

    const cookie = nookies.get(ctx)
    tokenService.save(cookie.chave, cookie.Player, isChecked ? 0 : data.idPlayer)



    const [values, setValues] = react.useState({
        user: '',
        valor:'',
    })
    function handlenChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValues((currenetValues) => {
            return {
                ...currenetValues,
                [fieldName]: fieldValue,
            }
        })
    }

  
    const user = () => {
        return (
            <AvatarCores key={data.idPlayer}>
                <FormControlLabel
                    name="user"
                    value={data.idPlayer}
                    control={
                        <Radio/>}

                    label={
                        <Image
                     width={60}
                    height={60}
                    src={`./avatar/${data.identificador}.svg`}
                />}
                    labelPlacement="top"
                    />
                
            </AvatarCores>

        )
    }
    const banco = () => {
        return (
            <>
                <FormControlLabel
                    name="user"
                    value="0"
                    control={
                        <Radio/>}

                    label={
                        <Image
                     width={60}
                    height={60}
                    src={`./icon/Bancoicon.svg`}
                />}
                    labelPlacement="top"
                    />
            </>

        )
    }

 
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }
   
    return (
        
        <BoxTrasnfere key={data.idPlayer} >

            <Botao onClick={handleOpen} variant="contained">Transferir</Botao>

            <Modal
            
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Área PIX | user {isChecked ?  "Banco" : data.namePlayer }
          </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        
          <Form  onSubmit={(event) => {
      event.preventDefault();
                authService.transfereDinheiro({
                  idPlayerPara: parseInt(values.user),
                  valor: parseInt(values.valor),
                })
                  .then((res) => {
                    success()
                    setValues({
                      user: '',
                      valor:'',
                    })
                    setChecked(false)
                    handleClose()
                  })
          .catch((err) => {
            error()
          })


      }}>
         <FormControl variant="standard" >
        
        </FormControl>
        <TextField
          label="Valor inicial"
          value={values.valor}
          onChange={handlenChange}
          name="valor"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom as any,
          }}
          variant="standard"
        />
         <FormLabel id="demo-controlled-radio-buttons-group">Escolha para quem será transferido </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={values.user}
        onChange={handlenChange}
                >
                    <AvatarCores>
                    {isChecked ? user() :  banco()}
            {data.players?.map((cor) => (
              <Coress>
                   
                    <FormControlLabel
                        name="user"
                        value={cor.idPlayer}
                        control={<Radio/>}
                        label={ <Image
                        width={80}
                        height={80}
                        src={`./avatar/${cor.identificador}.svg`}
                        
                        /> }
                        labelPlacement="top"
                    />
              </Coress>
              
         ))}
          
                     </AvatarCores>
           
      </RadioGroup>
        <Button type="submit" variant="outlined">enviar</Button>
            </Form>
          </Typography>
        </Box>
      </Modal>
            <div>
                {data.playerBank ? <SaldoFlag>
                    <Image src='./icon/Bancoicon.svg' width="48" height="48" />
                   
                            <FormControlLabel

                        control={<Android12Switch
                            checked={isChecked}
                            onClick={handleCheck}

                            />} label={''}/>
     
 

                </SaldoFlag> : null}
            </div>


        </BoxTrasnfere>


    )
}
