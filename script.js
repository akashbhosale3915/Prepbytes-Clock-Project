// Universal clock with AM/PM

const clock = () => {
  let time = new Date();
  a = time.getHours();
  b = time.getMinutes();
  c = time.getSeconds();

  let hours = document.getElementById("hours"),
    mins = document.getElementById("mins"),
    secs = document.getElementById("secs");

  if (a == 0) {
    a = 12;
  }

  if (a > 12) {
    a = a - 12;
    document.getElementById("ampm").innerText = "PM";
  }
  hours.innerText = a;
  mins.innerText = b;
  secs.innerText = c;
};

setInterval(clock, 1000);

// on button click function

const setalarm = () => {
  let wt = document.getElementById("wt"),
    lt = document.getElementById("lt"),
    nt = document.getElementById("nt"),
    nit = document.getElementById("nit"),
    wakeup = document.getElementById("wakeup"),
    lunch = document.getElementById("lunch"),
    nap = document.getElementById("nap"),
    night = document.getElementById("night");

  wt.innerText = wakeup.options[wakeup.selectedIndex].text;
  lt.innerText = lunch.options[lunch.selectedIndex].text;
  nt.innerText = nap.options[nap.selectedIndex].text;
  nit.innerText = night.options[night.selectedIndex].text;

  // wakeup

  let i = document.getElementById("wakeup").value;
  let hour = new Date().getHours();

  if (i == hour) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/wake.png)";
    document.getElementById("left-msg").innerText = "GOOD MORNING! WAKE UP!";
    document.getElementById("right-msg").innerText =
      "GRAB SOME HEALTHY BREAKFAST!!!";
  }

  // lunch

  let j = document.getElementById("lunch").value;
  let hour1 = new Date().getHours();

  if (j == hour1) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/lunch.png)";
    document.getElementById("left-msg").innerText =
      "GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementById("right-msg").innerText = "LET'S HAVE SOME LUNCH !!";
  }

  // nap

  let k = document.getElementById("nap").value;
  let hour2 = new Date().getHours();

  if (k == hour2) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/evening.png)";
    document.getElementById("left-msg").innerText = "GOOD EVENING !!";
    document.getElementById("right-msg").innerText =
      "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  }

  // night

  let l = document.getElementById("night").value;
  let hour3 = new Date().getHours();

  if (l == hour3) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/night.png)";
    document.getElementById("left-msg").innerText = "GOOD NIGHT !!";
    document.getElementById("right-msg").innerText =
      "CLOSE YOUR EYES AND GO TO SLEEP";
  }
};
