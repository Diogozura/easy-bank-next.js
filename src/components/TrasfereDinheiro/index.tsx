import Image from 'next/image';
import react from 'react'
import { authService } from '../../services/auth/authService';
import { Botao } from '../Botao';
import { Input } from '../Input';
import nookies from 'nookies'
import { useRouter } from 'next/router';
import { SaldoFlag, BoxTrasnfere } from '../BoxJogador';
import ToggleSwitch from '../ToggleSwitch';
import { tokenService } from '../../services/auth/tokenService';
import styleds from 'styled-components';
import { AvatarCores, CorJogadores, Form } from '../../../pages/Jogador';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import NumberFormat, { InputAttributes } from 'react-number-format';
import { FormControl, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { NumberFormatCustom } from '../../../pages/criarSala';

const ToggleSwitchBanco = styleds.aside`
    text-align: center;
    display: flex;
    justify-content: space-between;
`
const JogadoresTransfere = styleds.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`



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
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
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
    const [isChecked, setChecked] = react.useState(true)
    console.log(isChecked)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const cookie = nookies.get(ctx)
    tokenService.save(cookie.chave, cookie.Player, isChecked ? data.idPlayer : 0)



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
                <label
                    name="user"
                    value='banco'
                    htmlFor='banco'>
                    <Image src={`./avatar/${data.identificador}.svg`} alt={data.namePlayer} width="60" height="60" />
                    <h3>{data.namePlayer}</h3>
                </label>
                <input
                    name="user"
                    type="radio"
                    id='banco'
                    value={data.idPlayer}
                    onChange={handlenChange}
                />
            </AvatarCores>

        )
    }
    const banco = () => {
        return (
            <AvatarCores>
                <FormControlLabel
                    name="user"
                    value="0"
                    control={
                        <Radio/>}

                    label={
                        <Image
                     width={80}
                    height={80}
                    src={`./icon/Bancoicon.svg`}
                />}
                    labelPlacement="top"
                    />
            </AvatarCores>

        )
    }

    data.players.map((cor) => {
        console.log(cor.idPlayer)
    } )
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }
    const handleClear = () => {

    }
    


    
    return (
        
        <BoxTrasnfere key={data.idPlayer} >

            <Button onClick={handleOpen}>Open modal</Button>

            <Modal
            
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Área PIX | user {isChecked ? data.namePlayer : "Banco"}
          </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        
          <Form  onSubmit={(event) => {
      event.preventDefault();
      console.log( "para " + values.user, "valor" + parseInt(values.valor) ,"enviado por: " + cookie.banco)

      authService.transfereDinheiro({
          idPlayerPara: parseInt(values.user),
          valor:parseInt(values.valor),
      })
          .then((res) => {
              <p>tudo certo</p>
              alert("transação Concluída ")
              
             
          })
          .catch((err) => {
              alert(err)
              console.log(err)
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
         <FormLabel id="demo-controlled-radio-buttons-group">Escolha seu icone</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={values.user}
        onChange={handlenChange}
                >
                    <AvatarCores>
                    {isChecked ? banco() : user()}
            {data.players.map((cor) => (
              <CorJogadores>
                   
                    <FormControlLabel
                        name="user"
                        value={cor.idPlayer}
                        control={<Radio/>}
                        label={<Image
                        width={150}
                        height={150}
                        src={`./avatar/${cor.identificador}.svg`}
                        
                        />}
                        labelPlacement="top"
                    />
              </CorJogadores>
              
         ))}
          
                     </AvatarCores>
           
      </RadioGroup>
        <Button type="submit" onClick={() => {
          console.log("fui")
          }} variant="outlined">enviar</Button>
            </Form>
          </Typography>
        </Box>
      </Modal>



            {/* <Modal
                size="lg"
                toggle={toggle}
                isOpen={modal}
            >
                <ModalHeader toggle={toggle} className="bg-info text-white ">
                    <h2 >Area de Transferência Bancaria :</h2> {isChecked ? data.namePlayer : "Banco"}
                </ModalHeader>
                <ModalBody  >
                    <Form onSubmit={(event) => {
                        event.preventDefault();
                        console.log(parseInt(values.user), parseInt(values.valor))

                        authService.transfereDinheiro({
                            idPlayerPara: parseInt(values.user),
                            valor:parseInt(values.valor),
                        })
                            .then((res) => {
                                <p>tudo certo</p>
                                alert("transação Concluída ")
                                toggle()
                                console.log(res)
                               
                            })
                            .catch((err) => {
                                alert(err)
                                console.log((err))
                            })

                    }}>


                        <JogadoresTransfere>
                            {isChecked ? banco() : user()}
                            {conteudo}
                        </JogadoresTransfere>


                        <Input
                            type="number"
                            placeholder="Valor de Inicio"
                            name="valor"
                            required="required"
                            value={values.valor}
                            onChange={handlenChange}
                        />
                        {/* <IntlCurrencyInput type="text" required name="valor" placeholder="valor a transferir" value={values.valor} currency="BRL" config={currencyConfig}
                            onChange={handlenChange}
                            style={{
                                borderRadius: "10px",
                                textAlign: "center",
                                padding: "5px",
                                margin: "10px",
                            }}
                        />  <Botao type="submit">Transferir</Botao>
                    </Form>
                </ModalBody>
                <ModalFooter className="bg-info text-center">

                    <Button onClick={toggle} color="danger">
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>  */}
            <div>
                {data.playerBank ? <SaldoFlag>
                    <Image src='./icon/Bancoicon.svg' width="48" height="48" />
                   
                            <FormControlLabel

                            control={<Android12Switch 
                            isChecked={isChecked}
                            onClick={handleCheck}
                            
                            label=""
                                />}
                            />
     
 

                </SaldoFlag> : null}
            </div>


        </BoxTrasnfere>


    )
}