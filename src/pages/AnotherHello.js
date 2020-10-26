import React from 'react';
import TopPanel from '../components/TopPanel'
import '../App.css';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


function AnotherHello () {
  return (
    <div>
      <TopPanel />

      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <Typography align='justify'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit commodo, pulvinar sapien vel, maximus tortor. Nunc ut purus id dui sagittis malesuada. Duis hendrerit magna tortor, et feugiat dui cursus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eu urna tortor. Phasellus at mi metus. Quisque in ante finibus lectus tempor tincidunt. Nulla facilisi. Vestibulum leo risus, malesuada quis consequat eget, semper a lectus. Mauris mollis elementum ultrices.</p>

            <p>Duis convallis nunc vitae tortor pharetra, ut ultricies justo ultricies. Pellentesque ac diam dignissim, commodo ligula elementum, congue nunc. Suspendisse eu turpis eu quam interdum scelerisque. Phasellus ut nunc interdum, vestibulum quam egestas, finibus erat. Suspendisse at tellus ex. Aliquam erat volutpat. Nunc nec ligula lectus. Aenean et est tincidunt, ullamcorper libero non, pharetra est. Aenean nibh ante, tempor sed lobortis quis, malesuada id justo. In quis posuere metus, ac tempus arcu. Nullam fringilla enim libero, vitae euismod mi accumsan in.</p>

            <p>Vestibulum lorem ante, malesuada id faucibus quis, tincidunt at leo. Phasellus et lectus vel odio posuere porttitor. Phasellus imperdiet diam porta consequat semper. Aenean non ultricies massa, vel euismod neque. Nullam dictum mollis finibus. Nullam ornare orci commodo lacus pulvinar pretium. Aliquam venenatis volutpat nibh id faucibus. Ut aliquam consequat nisi, nec lobortis quam. Duis dignissim nec mi tempus hendrerit. Cras quis accumsan neque. Phasellus viverra, ipsum quis consectetur molestie, sapien metus ultricies augue, vel euismod tortor nisi ac magna.</p>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography align='justify'>
            <p>Donec scelerisque massa at augue lacinia pharetra. Aliquam a augue id nulla pharetra sodales vitae eu nibh. Donec vitae sem suscipit, dictum metus vel, venenatis nisl. Aliquam vitae massa faucibus, laoreet eros eu, egestas lacus. Donec pretium sed eros viverra congue. Vivamus diam felis, elementum eu congue nec, cursus a nulla. Nunc elementum orci magna, nec molestie magna finibus sit amet. Ut ultricies nulla eu tellus sollicitudin placerat. Mauris ornare, ipsum non ultrices bibendum, elit elit faucibus nulla, vel auctor lorem enim sit amet neque. Cras vitae posuere magna, convallis finibus elit. Maecenas sollicitudin condimentum neque, convallis porttitor ante efficitur ac. Donec cursus egestas nulla a gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <p>Maecenas luctus ante vitae odio tempus rhoncus. Nunc finibus ex enim, sit amet porttitor ipsum pellentesque posuere. Sed rhoncus faucibus erat, vitae aliquet quam ullamcorper at. Mauris ultricies, orci sit amet scelerisque egestas, diam purus ornare ipsum, ut porta lacus tellus eget leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut elit a velit vulputate vehicula eu vitae ipsum. Donec fermentum, enim ut interdum rhoncus, risus orci luctus lectus, nec commodo leo est eu diam.</p>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AnotherHello;