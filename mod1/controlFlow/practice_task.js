let userRole = "Non-Subscriber";
let accessLevel = [];
let userType;

if (userRole == "Employee") {
  accessLevel = [];
  accessLevel.push("Dietary Services");
} else if (userRole == "Enrolled Member") {
  accessLevel = [];
  accessLevel.push(
    "Dietary Services",
    "One-on-one Interaction with a Dietician"
  );
} else if (userRole == "Subscriber") {
  accessLevel = [];
  accessLevel.push("Facilitate Dietary Services");
} else {
  // Non-Subscriber
  accessLevel = [];
  accessLevel.push(
    "Need to enroll or at least subscribe first to avail this facility"
  );
}

console.log("Access:", accessLevel);
