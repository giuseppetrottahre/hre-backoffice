import React from 'react';
import {
  Create,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
  FileInput,
  FileField,
  DateInput,
  required,regex,SimpleForm,SaveButton,Toolbar,Button, Notification, useNotify 
} from 'react-admin';
import {httpClient,serverHost} from './constants'; 
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';

const CustomToolbar = (props) => (
  <Toolbar {...props}>
	<SaveButton label="CARICA"/>
  </Toolbar>
);


export const FinalBalance = (props) => {

    const notify = useNotify();

    const upload = data => {
        var fileDownload = require('js-file-download');
        let formData = new FormData();
        if (data.fileconsuntivazioneexcel !== undefined && data.fileconsuntivazioneexcel !== null) {
          let file = data.fileconsuntivazioneexcel.rawFile;
          data.fileconsuntivazioneexcel = file.name;
          formData.append('filexls', file);

      formData.append('jsondata', JSON.stringify(data));
      return httpClient(`${serverHost}/final_balance`, {
        'content-type': 'multipart/form-data',
        method: 'POST',
        body: formData,
      }).then(function(resp) {
          return fileDownload(resp.body, file.name+'.xml');
          },function(error){notify('ERROR: Check backends logs', { type: 'error' });});

        }
    }


return(

  <Create {...props}>

   <SimpleForm toolbar={<CustomToolbar/>} save={upload}>
	
<Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Consuntivazione </Typography>
  <FileInput source="fileconsuntivazioneexcel" label="" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" maxSize={3000000} placeholder={<p>Seleziona o trascina qui un file</p>} multiple ={false}>
    <FileField source="src" title="title" />
</FileInput>


</SimpleForm>
</Create>
);
}
