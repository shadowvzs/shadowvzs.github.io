function Calendar(settings={range:{}}) {
	var calendar, calBody, calHeader, selDate, currentDate, calPrev, calNext, calView, selected, render,
	yearStack = [], yearStackIndex, output, callback, eventData, output, selEvents, dateKey,
	dayShort = ['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun'], eventForm,
	viewMode, calMode = ['Day', 'Month', 'Year', 'YearStack', 'reserved', 'Event'],
 	monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  	
	function nextHandler() {
		if (viewMode === 0) {
			selDate.string = selDate.month === 12 ? `${selDate.year+1} 1 2 01:00:00` : `${selDate.year} ${selDate.month+1} 02 01:00:00`;
		} else if (viewMode === 1) {
			selDate.string = `${selDate.year+1} 1 2 01:00:00`;
		} else if (viewMode === 2) {
			let index = yearStackIndex;
			if (index == (yearStack.length-1)) { return console.log('Year stack upperlimit reached'); }
			index++;
			selDate.string = `${yearStack[index][0]} 1 2 01:00:00`;
			yearStackIndex = index;
		}
		if (selDate.string.substr(0,4) > yearStack[yearStack.length-1][1]) { return console.log('date lowerlimit reached'); }
		return selDate = render['selectNew'+calMode[viewMode]](selDate.string);
	}
	
	function toggleCalendar () {
		let stat = calendar.style.display;
		if (stat !== 'none') {
			//reser somthing if needed
		}
		calendar.style.display = stat !== 'block' ? 'block' : 'none';
	}
  
	function setYearStackIndex(year) {
		if (!year && year !== 0) { yearStackIndex = currentDate.yearStackIndex; }  
		var i = 0, max = yearStack.length;
		for (; i<max; i++) {
			if (yearStack[i][0] > year) { break; }
			yearStackIndex = i;
		}
	}
	  
	function prevHandler() {
		if (viewMode === 0) {
			selDate.string = selDate.month === 1 ? `${selDate.year-1} 12 2 01:00:00` : `${selDate.year} ${selDate.month-1} 02 01:00:00`;
		} else if (viewMode === 1) {
			selDate.string = `${selDate.year-1} 1 2 01:00:00`;
		} else if (viewMode === 2) {
				console.log('index: '+yearStackIndex);
				if (yearStackIndex < 1) { return console.log('Year stack lowerlimit reached'); }
				yearStackIndex--;
				selDate.string = `${yearStack[yearStackIndex][0]} 1 2 01:00:00`;
		}

		if (selDate.string.substr(0,4) < yearStack[0][0]) { return console.log('date lowerlimit reached'); }
		
		return selDate = render['selectNew'+calMode[viewMode]](selDate.string);
	}	
	
	function getDateArray (date) {
		return date.split(/[- :]/);
	}
	
	function validateTime(time){
		return /^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(time) 
			? (time.length === 4 ? '0'+time : time )
			: '';
	}
	
	function saveEvent() {
		var title = eventForm.title.value.trim(),
			message = eventForm.message.value.trim(),
			date = calView.dataset.lastDate,
			time = validateTime(eventForm.time.value),
			mysqlDate = getDateArray(date).join('-')+' '+time+':00',
			data = {
				key: dateKey,
				list: [
					{
						id: parseInt(eventForm.select.value, 10),
						title: title,
						message: message,
						[dateKey]: mysqlDate,				
					}
				],
			};
		if (!title || !message || !time) { return alert('Please fill the fields!');}
		// save to database 
		// we add only in callback
		addEvents(data);
		changeViewMode(0, date);
		console.log(eventData);
	}
	
	function removeEvent(){
		var index = parseInt(eventForm.select.value, 10),
			date = calView.dataset.lastDate,
			dateArray = getDateArray(date)
			obj = eventData;
		if (index == -1 || !selEvents[index] ) { return alert('Select an existing event what you want remove'); }
		// need ajax remove and we do this in callback
		for (key of dateArray) {
			key = parseInt(key, 10);
			if (!obj[key]) { return console.log('date not exist'); }
			obj = obj[key];
			obj.count--;
		}		

		obj.list.splice(index, 1);
		changeViewMode(0, date);
		console.log(eventData);
	}
	
	function getEvents(date) {
		var dateArr = getDateArray(date), obj = eventData;
		for (key of dateArr) {
			key = parseInt(key, 10);
			if (obj[key]) { obj = obj[key]; } else { console.log('no event at: '+date);return ''; }
		}
		
		return obj.list;
	}
	
	function pickDateHandler(e) {

		var t = e.target, tDate = t.dataset.date;
		if (!tDate) { return; } 

		if (viewMode > 0) {
			decreaseViewMode(tDate, e.target.dataset.yearStack);
		}else {
			var t = e.target;
			if (tDate) {
				selected = new Date(tDate);
				if (output) {
					output[output.tagName.toLowerCase() === "input" ? 'value' : 'innerHTML'] = tDate;
				}
				
				if (settings.callback) {
					changeViewMode (5, tDate, getEvents(tDate))
					settings.callback(tDate, getEvents(tDate));
				}
			}
		}
		
	}
	
	function pickEventHandler(e) {
		var eIndex = parseInt(e.target.dataset.event, 10);
		if (selEvents[eIndex]) { 
			eventForm.select.selectedIndex = eIndex+1;
			eventForm.title.value = selEvents[eIndex].title;
			eventForm.message.value = selEvents[eIndex].message;
		}
		
	}
	
	function changeEventHandler(){
		var index = eventForm.select.value;
		eventForm.title.value = index > -1 ? selEvents[index].title : '';
		eventForm.message.value = index > -1 ? selEvents[index].message : '';
	}
	
	function changeViewMode (vMode=0, newDate=null, yearStack=null) {
		
		if (!calMode[vMode]) { return console.log('view mode not exist: '+vMode ); }
		if (viewMode != vMode) {
			if (calBody) { calBody.innerHTML = ""; }
			calendar.classList.remove('v'+calMode[viewMode]);
		}

		calendar.classList.add('v'+calMode[vMode]);
		selDate = render['selectNew'+calMode[vMode]](newDate, yearStack);	
		viewMode = vMode;
		console.log('new view mode '+vMode);
	}
	
	function increaseViewMode(){
		if (viewMode === 5) {
			changeViewMode(0, calView.dataset.lastDate);
		//old condition viewMode < calMode.length - 1
		} else if (viewMode < 3) {
			changeViewMode(viewMode+1, calView.dataset.lastDate);
		}
	}
	
	
	
	function decreaseViewMode(newDate, YearStackIndex=null){
		changeViewMode(viewMode-1, newDate, YearStackIndex);
	}
	
	function addEvents(RawDates){
		var depth = 3, obj, date_key,
			date, data, i, {list, key} = RawDates;
			
		dateKey = key;
		if ( !eventData) { eventData = {}; } 
		
		for (data of list) {
			if (!data[key]) { continue; }
			date = getDateArray(data[key]);
			// generate key if not exist like obj[year][month][day]
			// and count the sub childs
			obj = eventData;
			for (i=0;i<depth;i++) {
				date_key = parseInt(date[i], 10);
				if (!obj[date_key]) { obj[date_key] = {}; }
				obj = obj[date_key];
				obj.count = !obj.count ? 1 : obj.count+1;
			}
			// add data to deepest obj like: 2018: { 11: {30: {list: [data] } } }
			if (!obj.list){obj.list=[];}
			obj.list.push(data);
		}
	}	
	
	var template = {
		window: '<div class="ev-cal" style="display:none;"></div>',
		content: '<div class="head"><div><a class="prev-index">&#8249;</a><p class="view-mode"></p><a class="next-index">&#8250;</a></div></div></div></div><div class="body"></div>',
		cell(str) { return "<div class='cell'>"+str+"</div>"; },
		subHead(days) { 
			var str = "";
			for (day of days) {
					str += "<div class='cell'>"+day+"</div>";
			}
			return "<div class='subHead'><div class='row'>"+str+"</div></div>"; 
		},
		events(list) {
			if (!list || list.length < 1) {
				return '<br>No event on this date';
			}
			var str = "";
			list.forEach(function (e, i) {
				str += "<div class='bubble'><h3 data-event="+i+">"+e.title+"</h3><p data-event="+i+">"+e.message+"</p><time>"+e[dateKey]+"</time></div>";
			});
			return str;
		},
		option(value, text) {
			return '<option value="'+value+'">'+text+'</option>';
		},
		newEventForm: '<div class="newEventForm"><input type="text" placeholder="Event title" class="title"> <textarea placeholder="Event description" class="message"></textarea><select></select><input type="text" class="time" placeholder="Time hh:mm" value="08:00"><button class="save">Save</button><button class="remove">Delete</button><div class="eventList"></div></div>' 
	}
	
	function init() {
		var now = new Date(), c, i, yearStackMin, yearStackMax, max, show = settings.show, eventDiv;
		if (show) {
			document.body.querySelector(show.place)
				.insertAdjacentHTML('afterend', template.window)
			document.body.querySelector(show.event[1])
				.addEventListener(show.event[0], toggleCalendar);
		}
		calendar = document.body.querySelector('.ev-cal');
		viewMode = settings.viewMode || 0;
		calendar.classList.add('v'+calMode[viewMode]);
		calendar.innerHTML = template.content;
		calHeader = calendar.querySelector('.head');
		calPrev = calHeader.querySelector('.prev-index');
		calNext = calHeader.querySelector('.next-index');
		calView = calHeader.querySelector('.view-mode');
		calBody = calendar.querySelector('.body');
		calBody.addEventListener("click", pickDateHandler);
		calPrev.addEventListener("click", prevHandler);
		calNext.addEventListener("click", nextHandler);
		calView.addEventListener("click", increaseViewMode);
		
		calHeader.insertAdjacentHTML( 'afterend', template.subHead(dayShort)+template.newEventForm);
		eventDiv = calendar.querySelector('.newEventForm');
		eventForm = {
			time: eventDiv.querySelector('input.time'),
			title: eventDiv.querySelector('input.title'),
			message: eventDiv.querySelector('textarea.message'),
			select: eventDiv.querySelector('select'),
			save: eventDiv.querySelector('button.save'),
			remove: eventDiv.querySelector('button.remove'),
			list: eventDiv.querySelector('.eventList'),
		};
		
		eventForm.list.addEventListener("click", pickEventHandler);
		eventForm.select.addEventListener("change", changeEventHandler);
		eventForm.save.addEventListener("click", saveEvent);
		eventForm.remove.addEventListener("click", removeEvent);
		console.log(eventForm);
		
		currentDate = {
			day: now.getDate(),
			month: now.getMonth()+1,
			year: now.getFullYear(),
			yearStackIndex: null,
			string: now.getFullYear()+' '+(now.getMonth()+1)+' '+now.getDate()
		};
		
		selDate	= currentDate;
		yearStackMin = settings.range.min || currentDate.year - 71;
		yearStackMax = settings.range.max || currentDate.year + 72;
		output = settings.output ? document.body.querySelector(settings.output) : null;
		callback = settings.callback || null;
		if (settings.data) { addEvents(settings.data); }
		console.log(eventData);
		
		i = 0;
		for (c=yearStackMin; c <=yearStackMax;c+=12) {
			console.log(c+'-'+yearStackMax);
			max = (c+12 > yearStackMax) ? yearStackMax+1 : c+12;
			yearStack.push([c, max-1]);
			if (currentDate.year >= c && currentDate.year < (max+1)){
				currentDate.yearStackIndex = i;
			}
			i++;
		}
		
		changeViewMode(viewMode);
		console.log(selDate);
	}
	
	function createCell (day, dateArr, status, date="", newYearStack=false){
		var div = document.createElement('div'), 
			className = ['inactive', null, 'selected'],
			classArr = ['cell'];
		div.dataset.date = date;
		if (newYearStack!==false) { div.dataset.yearStack = newYearStack; }
		
		if (className[status]) {classArr.push(className[status]); }

		if (currentDate.string === date) {
			classArr.push('today');
		}
		
		if ( eventData && dateArr) {
			if (typeof dateArr === "object") {
				var i = 0, obj = eventData;
				for (key of dateArr) {
					if (!obj[key]) { obj=null;break; }
					obj = obj[key];
				}
				if (obj && obj.count && obj.count > 0) {
					div.dataset.counter = obj.count;
				}
			}else if (typeof dateArr === "number") {
				var stack = yearStack[dateArr];
				if (stack) {
					let count = 0, start = stack[0], end = stack[1],
						i = start;
					for (; i<end; i++) {
						if (eventData[i] && eventData[i].count) {
							count += eventData[i].count;
						}
						console.log('i: '+i+'        '+count);
					}
					if (count > 0) {
						div.dataset.counter = count;
					}
				}
			}
		}
		
		div.appendChild(document.createTextNode(day));
		div.classList.add(...classArr);
		return div; 
	}

	function createRow (){
		var div = document.createElement('div'); 
		div.classList.add('row');
		return div; 
	}

	var render = {
		selectNewDay (dateTime=null) {
			var row, cell, selected, c, r, maxRow = 6, status = 0,
				fragment = document.createDocumentFragment(), selDate, iDay, iMonth, iYear;
			calBody.innerHTML=''; 
			selected = dateTime ? new Date(dateTime) : new Date();
			selected.day = selected.getDate();
			selected.month = selected.getMonth()+1;
			selected.year = selected.getFullYear();
			selected.days = new Date(selected.year, (selected.month), 0).getDate();
			selected.firstDay = new Date(selected.year, (selected.month-1), 1).getDay();
			selected.lastDay = new Date(selected.year, (selected.month), 0).getDay();
			setYearStackIndex(selected.year);
			calView.dataset.lastDate = selected.year+' '+selected.month+' '+selected.day+' 01:00:00';
			console.log('year'+selected.year);
			
			prev = new Date(selected.year, (selected.month - 2), 1);
			if(selected.month==0){prev = new Date(selected.year-1, 11, 1);}
			prev = new Date(prev.getFullYear(), (prev.getMonth() + 1), 0).getDate();
			iDay = prev - selected.firstDay-6;
			iYear = selected.year;
			iMonth = iDay > 1 ? selected.month-1 : selected.month;
			if (iMonth == 0) { iMonth = 12; iYear--;}
			if (prev-iDay>6) {
				iDay += 7;
			}
			console.log(iDay);
			for (r=0; r<maxRow; r++){
				row = createRow();
				for (c=0; c<7;c++){
					iDay++;

					if ((iDay > prev && status == 0) || (iDay > selected.days && status == 1)) { 
						status = status === 0 ? 1 : 0; 
						iDay = 1;
						if (iMonth > 11) {
							iYear++;
							iMonth = 0;
						}					
						iMonth++;
					}
					
					selDate = iYear+' '+('0' + iMonth).slice(-2)+' '+('0' + iDay).slice(-2);
					row.appendChild(
						createCell(
							iDay, 
							[iYear, iMonth, iDay],
							(currentDate.year === iYear &&  currentDate.month === iMonth && currentDate.day === iDay) ? 2 : status, 
							selDate
						)
					);
				}
				fragment.appendChild(row);
			}
		 
			calBody.appendChild(fragment);
			calView.innerHTML = monthName[selected.month-1]+' '+selected.year;
			return selected;
		},
		
		selectNewMonth(dateTime=null) {
			var row, cell, selected, c, r, i = 0, status, year,
				fragment = document.createDocumentFragment(), selDate;
			
			calBody.innerHTML=''; 
			selected = dateTime ? new Date(dateTime) : new Date();
			selected.day = selected.getDate();
			selected.month = selected.getMonth()+1;
			selected.year = selected.getFullYear();
			year = selected.year;
			calView.dataset.lastDate = year+' '+selected.month+' '+selected.day+' 01:00:00';
			setYearStackIndex(year);
		
			console.log('year'+year);
		
			for (r=0; r<4; r++){
				row = createRow();
				for (c=0; c<3;c++){
					i++;
					selDate = year+' '+(i)+' 1';
					status = (currentDate.year === year &&  currentDate.month === i) ? 2 : 1;
					row.appendChild(createCell(monthName[i-1], [year, i], status, selDate));
					
				}
				fragment.appendChild(row);
			}
		 
			calBody.appendChild(fragment);
			calView.innerHTML = selected.year;
			return selected;		
		},
		
		selectNewYear(dateTime=null, index=null) {
			var row, cell, selected, c, r, i = 0, status, year,
				selYearStack = isNaN(yearStackIndex) ? currentDate.yearStackIndex : yearStackIndex,
				start = yearStack[selYearStack][0], 
				end = yearStack[selYearStack][1],
				fragment = document.createDocumentFragment(), selDate;
			calBody.innerHTML=''; 
			yearStackIndex = index;

			if (!start || !end) { return console.log('invalid stack date');}
			
			selected = dateTime ? new Date(dateTime) : new Date();
			selected.day = selected.getDate();
			selected.month = selected.getMonth()+1;
			selected.year = selected.getFullYear();
			year = selected.year;
			calView.dataset.lastDate = year+' '+selected.month+' '+selected.day+' 01:00:00';
			setYearStackIndex(year);
			
			i = start;
			
			for (r=0; r<12; r++){
				row = createRow();
				for (c=0; (c<3);c++){
					if (i>end) { break; }
					selDate = i+' '+1+' 1';
					status = (currentDate.year === i) ? 2 : 1;
					row.appendChild(createCell(i,[i                    ], status, selDate));
					i++;
				}
				fragment.appendChild(row);
			}
		 
			calBody.appendChild(fragment);
			calView.innerHTML = start !== end ? start+' - '+end : start;
			return selected;			
		},
		
		selectNewYearStack(dateTime=null) {
			var row, cell, selected, c, r, i, status,
				start = 0, name,
				end = yearStack.length,
				fragment = document.createDocumentFragment(), selDate;
			calBody.innerHTML=''; 

			if (end == 0) { return console.log('year stack not defined');}
			
			selected = dateTime ? new Date(dateTime) : new Date();
			selected.day = selected.getDate();
			selected.month = selected.getMonth()+1;
			selected.year = selected.getFullYear();
			calView.dataset.lastDate = selected.year+' '+selected.month+' '+selected.day+' 01:00:00';
			
			i = 0;
			for (r=0; r<12; r++){
				row = createRow();
				for (c=0; (c<3);c++){
					if (!yearStack[i]) { break; }
					selDate = yearStack[i][0]+' '+1+' 1';
					status = (currentDate.yearStackIndex === i) ? 2 : 1;
					name = yearStack[i][0] !== yearStack[i][1] ? yearStack[i][0]+' - '+yearStack[i][1] : yearStack[i][0];
					row.appendChild(createCell(name,i, status, selDate, i));
					i++;
				}
				fragment.appendChild(row);
			}
		 
			calBody.appendChild(fragment);
			calView.innerHTML = yearStack[0][0]+' - '+yearStack[yearStack.length-1][1];
			return selected;			
		},
		
		selectNewEvent(date=null, events=null) {
			var	options;

			calView.innerHTML = date.split(' ').join('. ')+'.';
			calView.dataset.lastDate = date;
			selEvents = events;
			
			options = template.option(-1, 'New');
			if (events) {
				var i = 0, len = events.length;
				for (; i<len; i++) {
					options += template.option(i, events[i].title);
				}
			}else{
				eventForm.title.value = '';
				eventForm.message.value = '';
			}
			eventForm.select.innerHTML = options;
			eventForm.list.innerHTML = template.events(events);
		}
	};
	
	init();
};