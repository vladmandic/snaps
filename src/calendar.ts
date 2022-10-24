import $ from 'jquery';

export function renderCalendar(year?) {
  if (!year) year = new Date().getFullYear();
  $('#calendar-title').text(year);
  $('#prevyear').attr('href', '#' + (year - 1)).text(year - 1);
  $('#nextyear').attr('href', '#' + (year + 1)).text(year + 1);
  $('#prevyear').off('click');
  $('#nextyear').off('click');
  $('#prevyear').on('click', () => renderCalendar(year - 1));
  $('#nextyear').on('click', () => renderCalendar(year + 1));
  $('#calendar-months').html('<tr id="monthnames"></tr>');
  $('#calendar-days').html('<div class="day mo"></div>');
  for (let day = 0; day < 37; day++) {
    const weekday = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day % 7];
    $('#calendar-days').append(`<div class="day">${weekday}</div>`);
  }
  for (let month = 1; month <= 12; month++) {
    const monthName = new Date(year, month, 0).toLocaleString('en-US', { month: 'short' });
    $('#monthnames').append(`<td class="mc mo" valign="top"><span id="month${month}">${monthName}</span></td>`);
    const monthId = '#month' + month;
    let template = `<div class="months"><div class="mo">${monthName}</div>`;
    for (let i = 0; i < 37; i++) template += '<div class="dt"></div>';
    template += '</div>';
    $(monthId).html(template);
    const dt = $(monthId + ' div.dt');
    let index = new Date(year, month - 1, 1).getDay();
    const max = new Date(year, month, 0).getDate();
    for (let day = 1; day <= max; day++) dt.eq(index++).attr('id', `dt-${new Date(year, month - 1, day).toISOString().slice(0, 10)}`).html(`${day}`);
  }
  const today = new Date().toISOString().slice(0, 10);
  $(`#dt-${today}`).css('background', 'gray');
  $(`#dt-${today}`).css('font-weight', 'bold');
  $('calendar').show();
}

export function addNote(date: Date, note: string, callback?: (dt: Date, selected: boolean) => void) { // eslint-disable-line no-unused-vars
  const dt = date.toISOString().slice(0, 10);
  const el = $(`#dt-${dt}`);
  el.css('background', 'maroon');
  el.css('cursor', 'pointer');
  el.attr('title', note);
  el.on('mouseenter', () => $('#calendar-tooltip').html(dt + '<br>' + note));
  el.on('mouseleave', () => $('#calendar-tooltip').html(''));
  el.on('click', () => {
    $('#calendar-tooltip').html(dt + '<br>' + note);
    el.attr('name', el.attr('name') === 'true' ? 'false' : 'true');
    el.css('background', el.attr('name') === 'true' ? 'blue' : 'maroon');
    if (callback) callback(date, el.attr('name') === 'true');
  });
}

class Calendar extends HTMLElement { // watch for attributes
  connectedCallback() { // triggered on insert
    this.innerHTML = `
    <div id="calendar" style="visible: hidden; cursor: default; background: #333; width: fit-content; height: 100vh; padding: 8px;">
      <h1 id="calendar-title" style="display: inline-block; font-size: 3rem; margin: 20px 0 0 40px;"></h1>
      <h3 id="calendar-tooltip" style="display: inline-block; font-size: 1.5rem; margin: 20px 0 0 40px; float: right; vertical-align: top;"></h3>
      <h2 style="margin: 0 0 10px 40px;">
        <a id="prevyear" href=""></a>
        <a id="nextyear" href=""></a>
      </h2>
      <table>
        <tr>
          <td id="calendar-days"></td>
          <td>
            <table id="calendar-months"></table>
          </td>
        </tr>
      </table>
    </div>
    `;
  }
}

customElements.define('component-calendar', Calendar);
