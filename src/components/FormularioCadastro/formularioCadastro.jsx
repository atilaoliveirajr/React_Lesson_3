import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const [erros, setErros] = useState({cpf:{invalido: false, texto: ''}});
    return(
    <form onSubmit={(submitE) => {
            submitE.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes})}}>

        <TextField id="nome" variant="outlined" label="Nome" fullWidth margin="normal"
            value={nome}
            onChange={(evt)=> setNome(evt.target.value)}/>

        <TextField id="sobrenome" variant="outlined" label="Sobrenome" fullWidth margin="normal"
            value={sobrenome}
            onChange={(evt)=> setSobrenome(evt.target.value)}/>

        <TextField id="cpf" variant="outlined" label="CPF" fullWidth margin="normal"
            onBlur={(evt)=>{
                setErros({cpf: validarCPF(evt.target.value)})
            }}
            error={erros.cpf.invalido}
            helperText={erros.cpf.texto}
            value={cpf}
            onChange={(evt)=> setCpf(evt.target.value)}/>

        <FormControlLabel label="Promoções" control={<Switch name="promocao" checked={promocoes} color="primary" />} 
            onChange={(evt)=> setPromocoes(evt.target.checked)}/>

        <FormControlLabel label="Novidades" control={<Switch name="novidades" checked={novidades} color="primary" />}
            onChange={(evt)=> setNovidades(evt.target.checked)}/>

        <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
    </form>)
}
 
export default FormularioCadastro;