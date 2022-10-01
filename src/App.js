import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import WorkIcon from '@material-ui/icons/Work';
import PaletteIcon from '@material-ui/icons/Palette';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { EventList, EventCreate, EventEdit, EventShow } from './views/events';
import { UserList, UserCreate, UserEdit, UserShow } from './views/users';
import { SupplierList, SupplierShow, SupplierCreate, SupplierEdit } from './views/suppliers';
import { AccountList, AccountEdit, AccountCreate } from './views/accounts';
import { ClientList, ClientShow, ClientEdit, ClientCreate } from './views/clients';
import { authProvider } from './utils/authProvider';
import ChangePwd from './utils/changepwd';
import MyLoginPage from './utils/myloginpage';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import italianMessages from 'ra-language-italian';
import {httpClient,serverHost} from './utils/constants';
import {FinalBalance} from './utils/finalBalance.js';

const i18nProvider = polyglotI18nProvider(() => italianMessages, 'it');
/*
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.credentials = 'include';
  return fetchUtils.fetchJson(url, options);
};*/
/*
     <Resource name="artists" label= 'Artisti' list={ArtistList} show={ArtistShow}  edit={ArtistEdit} icon={PaletteIcon}/>,
      <Resource name="suppliers" label= 'Fornitori' list={SupplierList} show={SupplierShow}  edit={SupplierEdit} icon={WorkIcon}/>,

      */

export default function App() {
  //const serverHost = '/v1/backend';
  const backendDataProvider = simpleRestProvider(serverHost, httpClient);

  const hreDataProfider = {
    ...backendDataProvider,
    create: (resource, params) => {
      /*    if (resource !== 'clients'  && resource !== 'users' ) {
              return backendDataProvider.create(resource, params);
          }
  */
      let formData = new FormData();
      if (resource === 'events' || resource === 'accounts') {
        return backendDataProvider.create(resource, params);
      } else if (resource !== 'users') { //clients,suppliers,artists
        if (params.data.filepresentazione !== undefined && params.data.filepresentazione !== null) {
          let file = params.data.filepresentazione.rawFile;

          params.data.filepresentazione = file.name;
          formData.append('file', file);
        }
      } else {//resources===users
        if (params.data.filenameinputcv !== undefined && params.data.filenameinputcv !== null) {
          let file = params.data.filenameinputcv.rawFile;

          params.data.filenameinputcv = file.name;
          formData.append('files', file);
        }

        if (params.data.filenameinputprofiloimg !== undefined && params.data.filenameinputprofiloimg !== null) {
          let file = params.data.filenameinputprofiloimg.rawFile;

          params.data.filenameinputprofiloimg = file.name;
          formData.append('files', file);
        }


        if (params.data.filenameinteraimg !== undefined && params.data.filenameinteraimg !== null) {
          let file = params.data.filenameinteraimg.rawFile;

          params.data.filenameinteraimg = file.name;
          formData.append('files', file);
        }


        if (params.data.filenameinputaggiuntiva1img !== undefined && params.data.filenameinputaggiuntiva1img !== null) {
          let file = params.data.filenameinputaggiuntiva1img.rawFile;

          params.data.filenameinputaggiuntiva1img = file.name;
          formData.append('files', file);
        }


        if (params.data.filenameinputprimoimg !== undefined && params.data.filenameinputprimoimg !== null) {
          let file = params.data.filenameinputprimoimg.rawFile;

          params.data.filenameinputprimoimg = file.name;
          formData.append('files', file);
        }

        if (params.data.filenameinputaggiuntiva2img !== undefined && params.data.filenameinputaggiuntiva2img !== null) {
          let file = params.data.filenameinputaggiuntiva2img.rawFile;

          params.data.filenameinputaggiuntiva2img = file.name;
          formData.append('files', file);
        }
      }
      formData.append('jsondata', JSON.stringify(params.data));
      return httpClient(`${serverHost}/${resource}`, {
        'content-type': 'multipart/form-data',
        method: 'POST',
        body: formData,
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    },
    update: (resource, params) => {
      console.log(resource);
      /*  if (resource !== 'clients'  && resource !== 'users'  ) {
            return backendDataProvider.update(resource, params);
        }*/
      let formData = new FormData();
      if (resource === 'events' || resource === 'accounts') {
        return backendDataProvider.update(resource, params);
      } else if (resource !== 'users') { //clients,suppliers,artists
        if (params.data.newfilepresentazione !== undefined && params.data.newfilepresentazione !== null) {
          let file = params.data.newfilepresentazione.rawFile;
          params.data.filepresentazione = file.name;
          formData.append('file', file);
        }
      } else { //resources===users
        if (params.data.newfilenameinputcv !== undefined && params.data.newfilenameinputcv !== null) {
          let file = params.data.newfilenameinputcv.rawFile;

          params.data.filenameinputcv = file.name;
          formData.append('files', file);
        }

        if (params.data.newfilenameinputprofiloimg !== undefined && params.data.newfilenameinputprofiloimg !== null) {
          let file = params.data.newfilenameinputprofiloimg.rawFile;

          params.data.filenameinputprofiloimg = file.name;
          formData.append('files', file);
        }


        if (params.data.newfilenameinteraimg !== undefined && params.data.newfilenameinteraimg !== null) {
          let file = params.data.newfilenameinteraimg.rawFile;

          params.data.filenameinteraimg = file.name;
          formData.append('files', file);
        }


        if (params.data.newfilenameinputaggiuntiva1img !== undefined && params.data.newfilenameinputaggiuntiva1img !== null) {
          let file = params.data.newfilenameinputaggiuntiva1img.rawFile;

          params.data.filenameinputaggiuntiva1img = file.name;
          formData.append('files', file);
        }


        if (params.data.newfilenameinputprimoimg !== undefined && params.data.newfilenameinputprimoimg !== null) {
          let file = params.data.newfilenameinputprimoimg.rawFile;

          params.data.filenameinputprimoimg = file.name;
          formData.append('files', file);
        }

        if (params.data.newfilenameinputaggiuntiva2img !== undefined && params.data.newfilenameinputaggiuntiva2img !== null) {
          let file = params.data.newfilenameinputaggiuntiva2img.rawFile;

          params.data.filenameinputaggiuntiva2img = file.name;
          formData.append('files', file);
        }
      }

      formData.append('jsondata', JSON.stringify(params.data));


      return httpClient(`${serverHost}/${resource}/${params.data.id}`, {
        'content-type': 'multipart/form-data',
        method: 'PUT',
        body: formData,
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }
  };



  return (

    <Admin loginPage={MyLoginPage} dataProvider={hreDataProfider} authProvider={authProvider} i18nProvider={i18nProvider}>
      {(permissions) => {
        if (permissions === 'firstlogin') return [<ChangePwd />];
        if (permissions === 'admin') return [
          <Resource name="users" options={{ label: 'Anagrafica' }} list={UserList} show={UserShow} create={UserCreate} edit={UserEdit} icon={PeopleIcon} />,
          <Resource name="events" options={{ label: 'Posizione lavorativa' }} list={EventList} show={EventShow} create={EventCreate} edit={EventEdit} icon={EventIcon} />,
          <Resource name="suppliers" options={{ label: 'Fornitori' }} list={SupplierList} show={SupplierShow} create={SupplierCreate} edit={SupplierEdit} icon={WorkIcon} />,
          <Resource name="clients" options={{ label: 'Clienti' }} list={ClientList} show={ClientShow} create={ClientCreate} edit={ClientEdit} icon={RecentActorsIcon} />,
          <Resource name="events_users" />,
          <Resource name="accounts" options={{ label: 'Account' }} list={AccountList} edit={AccountEdit} create={AccountCreate} icon={AccountBoxIcon} />
          ,<Resource name="final_balance" options={{ label: 'Consuntivazione' }} list={FinalBalance} />
        ];
        if (permissions === 'user') return [
          <Resource name="users" options={{ label: 'Anagrafica' }} list={UserList} show={UserShow} create={UserCreate} edit={UserEdit} icon={PeopleIcon} />,
          <Resource name="events" options={{ label: 'Posizione lavorativa' }} list={EventList} show={EventShow} create={EventCreate} edit={EventEdit} icon={EventIcon} />,
          <Resource name="suppliers" options={{ label: 'Fornitori' }} list={SupplierList} show={SupplierShow} create={SupplierCreate} edit={SupplierEdit} icon={WorkIcon} />,
          <Resource name="clients" options={{ label: 'Clienti' }} list={ClientList} show={ClientShow} create={ClientCreate} edit={ClientEdit} icon={RecentActorsIcon} />,
          <Resource name="events_users" />
        ];


        if (permissions === 'hr') return [
          <Resource name="users" options={{ label: 'Anagrafica' }} list={UserList} show={UserShow} create={UserCreate} edit={UserEdit} icon={PeopleIcon} />,
          <Resource name="events" options={{ label: 'Posizione lavorativa' }} list={EventList} show={EventShow} create={EventCreate} edit={EventEdit} icon={EventIcon} />,
          <Resource name="events_users" />
          ,<Resource name="final_balance" options={{ label: 'Consuntivazione' }} list={FinalBalance} />
        ];

      }
      }
    </Admin>
  )
};
