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
  // show timings div
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
  // show timings div end

  // dropdown dynamic logic
  let i = document.getElementById("wakeup").value;
  let j = document.getElementById("lunch").value;
  let k = document.getElementById("nap").value;
  let l = document.getElementById("night").value;
  let unitime = new Date().getHours();

  // wakeup

  if (i == unitime) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/wake.png)";
    document.getElementById("left-msg").innerText = "GOOD MORNING! WAKE UP!";
    document.getElementById("right-msg").innerText =
      "GRAB SOME HEALTHY BREAKFAST!!!";
  }

  // lunch

  if (j == unitime) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/lunch.png)";
    document.getElementById("left-msg").innerText =
      "GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementById("right-msg").innerText = "LET'S HAVE SOME LUNCH !!";
  }

  // nap

  if (k == unitime) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/evening.png)";
    document.getElementById("left-msg").innerText = "GOOD EVENING !!";
    document.getElementById("right-msg").innerText =
      "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  }

  // night

  if (l == unitime) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/night.png)";
    document.getElementById("left-msg").innerText = "GOOD NIGHT !!";
    document.getElementById("right-msg").innerText =
      "CLOSE YOUR EYES AND GO TO SLEEP";
  }

  // no match condition

  if (i != unitime && j != unitime && k != unitime && l != unitime) {
    document.getElementById("time-img").style.backgroundImage =
      "url(./Images/party.png)";
    document.getElementById("left-msg").innerText = "Party Time!";
    document.getElementById("right-msg").innerText = "Lets Party !!!";
  }
  //dynamic dropdown logic end
};
