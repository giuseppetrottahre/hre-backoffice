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
  FileField,UrlField
} from 'react-admin';
import { BoxedShowLayout, RaBox } from 'ra-compact-ui';
import Typography from '@material-ui/core/Typography';


export const UserShow= (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Utenti">
  <BoxedShowLayout>
    <RaBox display="block" >
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Informazioni di base </Typography>
        <RaBox display="flex" >
            <RaBox flex="0 0.3 100%" display="flex" flexDirection="column" justifyContent="space-between">
            <TextField source="id" disabled label="Id"/>
            <DateField source="inserttimestamp" label="Data registrazione"/>	
            <TextField source="secondonome" label="Secondo Nome"/>
            <TextField surce="cellulare" label="Cellulare"/>
            <TextField source="regione" label="Regione"/>
            <TextField source="indirizzodomicilio" label="Indirizzo Domicilio"/>
            <TextField source="nazionedinascita" label="Nazione di Nascita"/>
            <UrlField source="fblink" label="Facebook Link"/>
            </RaBox>
            <RaBox flex="0 0.3 100%" display="flex" flexDirection="column" justifyContent="space-between">
            <TextField source="stato" label="Stato"/>
            <TextField source="nome" label="Nome"/>
            <TextField source="genere" label="Genere"/>
            <TextField source="telefono" label="Telefono"/>
            <TextField source="provincia" label="Provincia"/>
            <TextField source="cap" label="C.A.P."/>
            <TextField source="provinciadinascita" label="Provincia di Nascita"/>
            <UrlField source="instalink" label="Instagram Link"/>
            </RaBox>
            <RaBox flex="0 0.3 100%" display="flex" flexDirection="column" justifyContent="space-between">
            <TextField source="valutazione" label="Valutazione"/>
            <TextField source="cognome" label="Cognome"/>
            <TextField source="mail" label="Email"/>
            <TextField source="codicefiscale" label="Codice Fiscale"/>
            <TextField source="citta" label="Città"/>
            <DateField source="datadinascita" label="Data di Nascita"/>
            <TextField source="cittadinascita" label="Città di Nascita"/>
            <TextField source="note" label="Note"/>
            </RaBox>
        </RaBox>
        <Typography variant="h6" style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Dettagli personali </Typography>
        <RaBox flex="0 1 100%" display="flex" flexDirection="row" justifyContent="space-between">
        <NumberField source="titolodistudi" label="Titolo di studi"/>
    <TextField source="annodiconseguimento" label="Anno di conseguimento"/>
    <TextField source="notepersonali" label="Note"/>
    <TextField source="istituto" label="Istituto"/>
    <TextField source="votazione" label="Votazione"/>
        </RaBox>
        <Typography variant="h6" style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Competenze linguistiche </Typography>
        <RaBox flex="0 1 100%" display="flex" flexDirection="row" justifyContent="space-between">
        <TextField source="inglese" label="Inglese"/>
    <TextField source="francese" label="Francese"/>
    <TextField source="tedesca" label="Tedesca"/>
    <TextField source="spagnola" label="Spagnola"/>
    <TextField source="altrelingue" label="Altre Lingue"/>

        </RaBox>
        <Typography variant="h6" style={{ textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}>  Patenti e corsi </Typography>
        <RaBox flex="0 1 100%" display="flex" flexDirection="row" justifyContent="space-between">
        <BooleanField source="haccp" label="H.A.C.C.P."/>
    <BooleanField source="primosoccorso" label="Primo Soccorso"/>
    <BooleanField source="antincendio" label="Antincendio"/>
    <BooleanField source="tesserinoaeroporto" label="Tesserino Aeroporto"/>
    <BooleanField source="brevetto" label="brevetto"/>
    <BooleanField source="tesserinosicurezza" label="Tesserino Sicurezza"/>
    <BooleanField source="automunito" label="Automunito"/>
    <BooleanField source="patenteauto" label="Patente Auto"/> 
 
</RaBox>
<Typography variant="h6"style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> C.V / Photo </Typography>
<RaBox flex="0 1 100%" display="flex" flexDirection="row" justifyContent="space-between">
<FileField source="filenameinputcv" label="C.V. allegato" title="C.V." target="_blank"/>
    <FileField source="filenameinputprofiloimg" label="Foto Profilo" title="Profilo" target="_blank"/>
</RaBox>
      </RaBox>
    </BoxedShowLayout>
</Tab>
<Tab label="Candidature">
<ReferenceManyField
        reference="events_users"
        target="user_id"
        label="candidature"
        filter={{ "get_events": true }}
      >
      <Datagrid>
      <TextField source="id" label='id' />
      <TextField source="nomeevento" label='Nome Evento'/>
    </Datagrid>
      </ReferenceManyField>
</Tab>
    </TabbedShowLayout>

  </Show>
);
