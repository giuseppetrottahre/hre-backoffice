import React from 'react';
import {
    Edit,
    TextInput,
    TextField,
    DateField,
    FileInput,
    SelectInput,
    EmailField,FileField
  } from 'react-admin';
  import { RaBox,CompactForm } from 'ra-compact-ui';
  import { provinciecitta,provincie,provinciecittacap,toChoices } from '../../utils/constants';
  import { useFormState } from 'react-final-form';
  import Typography from '@material-ui/core/Typography';

  const CittaInput = props => {
    const { values } = useFormState();
    function getKey(){
      if (values.provincia!==null && values.provincia!==undefined) {
        let result=values.provincia.replaceAll(" ","").replaceAll("-","").replaceAll("'","").replaceAll("/","")
         return result
      }
      return undefined
    }
    return (
        <SelectInput
            choices={getKey() ? toChoices(provinciecitta[getKey()]) : []}
            {...props}
        />
    );
};


const CapInput = props => {
  const { values } = useFormState();
  function getKey(){
    if (values.provincia!==null && values.provincia!==undefined &&
        values.citta!==null && values.citta !==undefined) {
        let result=values.provincia.concat(values.citta);
        return result.replaceAll(" ","").replaceAll("-","").replaceAll("'","").replaceAll("/","")
      }
      return undefined
  }
  return (
      <SelectInput
          choices={getKey() ? toChoices(provinciecittacap[getKey()]) : []}
          {...props}
      />
  );
};



export const ClientEdit= (props) => (
  <Edit {...props}>
    <CompactForm layoutComponents={[RaBox]} >
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Modifica Cliente </Typography>
      <RaBox display="flex" flexDirection="row" justifyContent="space-evenly">
    <RaBox display="flex" flexDirection="column" justifyContent="space-between">
      {/*<TextField source="id" disabled />*/}
      <DateField source="inserttimestamp" label="Data registrazione" showTime={false} />
      <TextInput source="nome" label= 'Nome' />
      <TextInput source="azienda" label= 'Azienda' />
      <CittaInput source="citta" label= 'Città' />
      </RaBox>
      <RaBox  display="flex" flexDirection="column" justifyContent="space-between">
      <EmailField source="email" label='Email' disabled/>
      <TextInput source="cognome" label= 'Cognome' />
      <SelectInput source="provincia" label='Provincia' choices={toChoices(provincie)}/>
      <TextInput source="cap" label= 'C.A.P.' />
      </RaBox>
      <RaBox  display="flex" flexDirection="column" justifyContent="space-between">
      <TextInput source="noteaggiuntive"  label= 'Note aggiuntive' />
      <FileInput source="newfilepresentazione" label="File presentazione" accept="application/pdf" maxSize={3000000} placeholder={<p>Seleziona o trascina qui un file</p>} multiple ={false}>
        <FileField source="src" title="title" />
    </FileInput>
      <FileField source="filepresentazione" title="File attuale" disabled/>
    </RaBox>
    </RaBox>
    </CompactForm>
  </Edit>
);