import React from 'react';
import {
  Show,
  TextField,
  Datagrid,
  BooleanField,
  NumberField,
  DateField,
  ReferenceManyField,
  TabbedShowLayout, Tab,
  Pagination,Button,RichTextField,showNotification,useRefresh
} from 'react-admin';
import Link from '@material-ui/core/Link';
import { BoxedShowLayout, RaBox } from 'ra-compact-ui';
import Typography from '@material-ui/core/Typography';



const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10, 25]} {...props} />;

/*
const ButtonField = ({source, record,operation,label,...props}) => {
  const refresh = useRefresh();
return(
  <Button label={label} onClick={()=>{
      fetch("/v1/backend/envets_users/"+operation, { method: 'POST', body:JSON.stringify({event_id:props["id"],user_id:record[source]}), headers: {
        'Content-Type': 'application/json'} })
      .then(() => {
          showNotification('Candidatura rimossa');
          refresh();
      })
      .catch((e) => {
          showNotification('Error: Candidatura non rimossa', 'warning')
      });
  }}/>
);
}
*/

const ProposeButton = ({source, record,label,...props}) => {
  const refresh = useRefresh();
return(
  <Button label={label} onClick={()=>{
      fetch("/v1/backend/envets_users/propose", { method: 'POST', body:JSON.stringify({event_id:props["id"],user_id:record[source]}), headers: {
        'Content-Type': 'application/json'} })
      .then(() => {
          showNotification('Success: Notifica evento inviato');
          refresh();
      })
      .catch((e) => {
          showNotification('Error: impossibile inviare notifica evento', 'warning')
      });
  }}/>
);
}


const LinkField=({record,labelLink,...props})=>{
   const hrefstr="#/users/"+record["id"]+"/show"
  return(
  <Link href={hrefstr} target="_blank">
  {labelLink}
</Link>
  )
}




export const EventShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Eventi">
      <BoxedShowLayout>
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Informazioni </Typography>

    <RaBox flex="0 0 100%" display="flex" flexDirection="row" justifyContent="space-between">
        {/*<TextField source="id" disabled /> */}
        <TextField source="nomeevento" label='Nome posizione lavorativa' />
        <DateField source="datainizio" label='Data Inizio' />
        <DateField source="datafine" label='Data Fine' />

        </RaBox>
        <RaBox flex="0 0 100%" display="flex" flexDirection="row" justifyContent="space-between">
        <BooleanField source="attivo" label='Attivo' />
        <NumberField source="numerominimocandidati" label='Numero Minimo Candidati' />
        <NumberField source="numeromassimocandidati" label='Numero Massimo Candidati' />

 </RaBox>
 <RaBox flex="0 0 100%" display="flex" flexDirection="row" justifyContent="space-between">
 <TextField source="urlcandidature" label='URL per candidature' />
  <TextField source="linkcandidaturautenti" label='Link alla pagina conferma/rifiuto candidatura da includere nella email ai candidati' disabled />
  <TextField source="linkcandidaturaweb" label='Link alla pagina di invito candidatura da includere negli annunci su web' disabled />
   </RaBox>
   <RichTextField source="descrizione" label='Descrizione'/>  
 </BoxedShowLayout>
      </Tab>
      <Tab label="Candidature">
        <ReferenceManyField
          // reference="users"
          reference="events_users"
          target="event_id"
          label="candidture"
          pagination={<PostPagination />}
          filter={{ "events_id_negate": false }}
        >
          <Datagrid >
            <TextField source="id" label= 'id'  />
            <TextField source="nome" label= 'Nome utente'  />
            <TextField source="status" label= 'Stato candidatura'  sortable={false}/>
         {/*   <ButtonField source="id" operation="DEL" label="Remove" {...props}/>*/}
            <LinkField labelLink="Mostra utente" sortable={false}/>
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Utenti disponibili">
        <ReferenceManyField
         // reference="users"
         reference="events_users"
          target="event_id"
          label="candidture"
          pagination={<PostPagination />}
          filter={{ "events_id_negate": true }}   //,"from":"event"
        >
          <Datagrid>
            <TextField source="id" label= 'id' />
            <TextField source="nome" label= 'Nome utente'  />
       {/*     <ButtonField source="id" operation="ADD" label="Add"{...props}/>*/}
            <ProposeButton source="id" label="Notifica Evento"{...props} sortable={false}/>
            <LinkField labelLink="Mostra utente" sortable={false}/>
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
