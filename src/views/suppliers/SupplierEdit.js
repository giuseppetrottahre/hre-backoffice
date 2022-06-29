import React from 'react';
import {
  Edit,DateField,EmailField,
  TextInput,
  FileInput,
  required,FileField,SelectInput
} from 'react-admin';
import { RaBox,CompactForm } from 'ra-compact-ui';
import { provinciecitta,provincie,provinciecittacap,toChoices, tipologialocation,categoriafornitore } from '../../utils/constants';
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


export const SupplierEdit= (props) => (
<Edit {...props}>
 <CompactForm layoutComponents={[RaBox]}> 
  <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Nuovo Fornitore </Typography>
  <RaBox display="flex" flexDirection="row" justifyContent="space-evenly">
  <RaBox display="flex" flexDirection="column" justifyContent="space-between">
  <DateField source="inserttimestamp" label="Data registrazione" showTime={false} />
  <TextInput source="nome" label= 'Nome'  />
  <SelectInput source="provincia" label='Provincia' choices={toChoices(provincie)} />
  <TextInput source="azienda" label= 'Azienda' />
  <SelectInput source="categoriafornitore"  label= 'Categoria fornitore' choices={categoriafornitore} />
  </RaBox>
   <RaBox display="flex" flexDirection="column" justifyContent="space-between">
   <EmailField source="email" label='Email' disabled/>
   <TextInput source="cognome" label= 'Cognome' />
   <CittaInput source="citta" label= 'Città' />
   <TextInput source="cap" label= 'CAP' />
   <SelectInput source="tipologialocation"  label= 'Tipologia location' choices={tipologialocation} />
  </RaBox>
  <RaBox display="flex" justifyContent="space-around" flexDirection="column">
  <FileInput source="newfilepresentazione" label="File presentazione" accept="application/pdf" maxSize={3000000} placeholder={<p>Seleziona o trascina qui un file</p>} multiple ={false}>
        <FileField source="src" title="title" />
    </FileInput>
      <FileField source="filepresentazione" title="File attuale" disabled/>
  </RaBox>
  </RaBox> 
  </CompactForm>
</Edit>
);