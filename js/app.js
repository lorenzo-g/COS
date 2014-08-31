var app = angular.module('medScales',['ionic']);

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

app.config(function($stateProvider, $urlRouterProvider, $compileProvider) {
    $stateProvider.
        state('main', {
            url         : '/',
            templateUrl : 'templates/main.html',
            controller  : 'MainCtrl'
        }).
        state('neuro', {
            url         : '/neuro',
            templateUrl : 'templates/neuro.html',
            controller  : 'neuroCtrl'
        }).
        state('biostat', {
            url         : '/biostat',
            templateUrl : 'templates/biostat.html',
            controller  : 'biostatCtrl'
        }).
        state('cardio', {
            url         : '/cardio',
            templateUrl : 'templates/cardio.html',
            controller  : 'cardioCtrl'
        }).
        state('neo', {
            url         : '/neo',
            templateUrl : 'templates/neo.html',
            controller  : 'neoCtrl'
        }).
        state('gastro', {
            url         : '/gastro',
            templateUrl : 'templates/gastro.html',
            controller  : 'gastroCtrl'
        }).
        state('pneumo', {
            url         : '/pneumo',
            templateUrl : 'templates/pneumo.html',
            controller  : 'pneumoCtrl'
        }).
        state('metab', {
            url         : '/metab',
            templateUrl : 'templates/metab.html',
            controller  : 'metabCtrl'
        }).
        state('nefro', {
            url         : '/nefro',
            templateUrl : 'templates/nefro.html',
            controller  : 'nefroCtrl'
        }).
        state('rr', {
            url         : '/rr',
            templateUrl : 'templates/rr.html',
            controller  : 'rrCtrl'
        }).
        state('sensspec', {
            url         : '/sensspec',
            templateUrl : 'templates/sensspec.html',
            controller  : 'sensspecCtrl'
        }).
        state('pnpv', {
            url         : '/pnpv',
            templateUrl : 'templates/pnpv.html',
            controller  : 'pnpvCtrl'
        }).
        state('pnpv1', {
            url         : '/pnpv1',
            templateUrl : 'templates/pnpv1.html',
            controller  : 'pnpv1Ctrl'
        }).
        state('pnpv2', {
            url         : '/pnpv2',
            templateUrl : 'templates/pnpv2.html',
            controller  : 'pnpv2Ctrl'
        }).
        state('gcs', {
            url         : '/gcs',
            templateUrl : 'templates/gcs.html',
            controller  : 'gcsCtrl'
        }).
        state('bmi', {
            url         : '/bmi',
            templateUrl : 'templates/bmi.html',
            controller  : 'bmiCtrl'
        }).
        state('ldl', {
            url         : '/ldl',
            templateUrl : 'templates/ldl.html',
            controller  : 'ldlCtrl'
        }).
        state('qtc', {
            url         : '/qtc',
            templateUrl : 'templates/qtc.html',
            controller  : 'qtcCtrl'
        }).
        state('abcd2', {
            url         : '/abcd2',
            templateUrl : 'templates/abcd2.html',
            controller  : 'abcd2Ctrl'
        }).
        state('cgf', {
            url         : '/cgf',
            templateUrl : 'templates/cgf.html',
            controller  : 'cgfCtrl'
        }).
        state('als', {
            url         : '/als',
            templateUrl : 'templates/als.html',
            controller  : 'alsCtrl'
        }).
        state('meld', {
            url         : '/meld',
            templateUrl : 'templates/meld.html',
            controller  : 'meldCtrl'
        }).
        state('timi', {
            url         : '/timi',
            templateUrl : 'templates/timi.html',
            controller  : 'timiCtrl'
        }).
        state('timi2', {
            url         : '/timi2',
            templateUrl : 'templates/timi2.html',
            controller  : 'timi2Ctrl'
        }).
        state('curb65', {
            url         : '/curb65',
            templateUrl : 'templates/curb65.html',
            controller  : 'curb65Ctrl'
        }).
        state('cps', {
            url         : '/cps',
            templateUrl : 'templates/cps.html',
            controller  : 'cpsCtrl'
        }).
        state('his', {
            url         : '/his',
            templateUrl : 'templates/his.html',
            controller  : 'hisCtrl'
        }).
        state('tiff', {
            url         : '/tiff',
            templateUrl : 'templates/tiff.html',
            controller  : 'tiffCtrl'
        }).
        state('apgar', {
            url         : '/apgar',
            templateUrl : 'templates/apgar.html',
            controller  : 'apgarCtrl'
        }).
        state('about', {
            url         : '/about',
            templateUrl : 'templates/about.html',
            controller  : 'aboutCtrl'
        }).
        state('odds', {
            url         : '/odds',
            templateUrl : 'templates/odds.html',
            controller  : 'oddsCtrl'
        });


    $urlRouterProvider.otherwise('/');


    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/);
});

app.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.pname = "COS Medical Calculator";
}]);

app.controller('neuroCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Neurology";
        $scope.abcd2Help = false;
        $scope.gcsHelp = false;
        $scope.alsHelp = false;
        $scope.hisHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('biostatCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Epidemiology";
        $scope.oddsHelp = false;
        $scope.rrHelp = false;
        $scope.sensHelp = false;
        $scope.pnpvHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('cardioCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Cardiology";
        $scope.qtHelp = false;
        $scope.timiHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('neoCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Neonatology";
        $scope.apgarHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('gastroCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Gastroenterology";
        $scope.meldHelp = false;
        $scope.cpsHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('pneumoCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Pneumology";
        $scope.curb65Help = false;
        $scope.tiffHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('metabCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Metabolism";
        $scope.bmiHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('nefroCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Nephrology";
        $scope.cgfHelp = false;
        
        $scope.goTo = function(url) {
            document.location.href = url;
        };
}]);

app.controller('aboutCtrl', ['$scope',
    function($scope) {
        $scope.pname = "About";
}]);

app.controller('pnpvCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Predictive Values (PV)";
}]);

app.controller('pnpv1Ctrl', ['$scope',
    function($scope) {
        $scope.pname = "Predictive values (PV)";
        $scope.ppv="-";
        $scope.npv="-";
        
        $scope.calculate = function() {
            p11 = parseFloat(document.getElementById("p11").value);
            p12 = parseFloat(document.getElementById("p12").value);
            p21 = parseFloat(document.getElementById("p21").value);
            p22 = parseFloat(document.getElementById("p22").value);
            $scope.ppv = roundToTwo(p11/(p11+p12)*100);
            $scope.npv = roundToTwo(p22/(p22+p21)*100);
        };
}]);

app.controller('pnpv2Ctrl', ['$scope',
    function($scope) {
        $scope.pname = "Predictive Values (PV)";
        $scope.ppv="-";
        $scope.npv="-";
        
        $scope.calculate = function() {
            sens = document.getElementById("sens").value/100;
            spec = document.getElementById("spec").value/100;
            prev = document.getElementById("prev").value/100;
            sensInv = (1 - sens);
            specInv = (1 - spec);
            prevInv = (1 - prev);
            $scope.ppv = roundToTwo(((sens * prev)/((sens * prev) + specInv * prevInv))*100);
            $scope.npv = roundToTwo(((spec * prevInv)/((sensInv * prev) + spec * prevInv))*100);
        };
}]);


app.controller('oddsCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Odds Ratio";
        $scope.or="-";
        
        $scope.calculate = function() {
            p11 = parseFloat(document.getElementById("p11").value);
            p12 = parseFloat(document.getElementById("p12").value);
            p21 = parseFloat(document.getElementById("p21").value);
            p22 = parseFloat(document.getElementById("p22").value);
            $scope.or = roundToTwo((p11*p22)/(p12*p21));
        };
}]);

app.controller('rrCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Risk Ratio";
        $scope.rr="-";
        
        $scope.calculate = function() {
            p11 = parseFloat(document.getElementById("p11").value);
            p12 = parseFloat(document.getElementById("p12").value);
            p21 = parseFloat(document.getElementById("p21").value);
            p22 = parseFloat(document.getElementById("p22").value);
            $scope.rr = roundToTwo((p11/(p11+p12))/(p21/(p21+p22)));
        
            if ($scope.rr == 1){
                $scope.smartColor = "energized";
            } else if ($scope.rr < 1){
                $scope.smartColor = "balanced";
            } else {
                $scope.smartColor = "assertive";
            };
        
        };
}]);

app.controller('sensspecCtrl', ['$scope',
    function($scope) {
        $scope.pname = "Sensitivity and specificity";
        $scope.sens="-";
        $scope.spec="-";
        
        $scope.calculate = function() {
            p11 = parseFloat(document.getElementById("p11").value);
            p12 = parseFloat(document.getElementById("p12").value);
            p21 = parseFloat(document.getElementById("p21").value);
            p22 = parseFloat(document.getElementById("p22").value);
            $scope.sens = roundToTwo((p11/(p11+p21))*100);
            $scope.spec = roundToTwo((p22/(p22+p12))*100);
        };
}]);

app.controller('gcsCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Glasgow Coma Scale";
        $scope.score = "-";
        $scope.notes = "";
        $scope.calculate = function() {
            $scope.notes = "";
            eye = parseFloat(document.getElementById("eye").value);
            verbal = parseFloat(document.getElementById("verbal").value);
            motor = parseFloat(document.getElementById("motor").value);
            $scope.score = eye + motor + verbal;
            if (eye == 0){
                $scope.score += 1;
                $scope.notes += "c"
            };
            if (verbal == 0){
                $scope.score +=1;
                $scope.notes += "t"
            };
            
            if ($scope.score >= 13){
                $scope.smartColor = "balanced";
            } else if ($scope.score >= 9){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
            
        };
        
}]);

app.controller('bmiCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Body Mass Index (BMI)";
        $scope.bmi="-";
        $scope.showInterpret = false;

        $scope.calculate = function() {
            height = document.getElementById("height").value/100;
            weight = document.getElementById("weight").value;
            $scope.bmi = roundToTwo(weight/(height*height));
            
            if ($scope.bmi >= 18.5 && $scope.bmi < 25){
                $scope.smartColor = "balanced";
            } else if ($scope.bmi >= 25 && $scope.bmi < 30){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
        };
}]);

app.controller('abcd2Ctrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "ABCD2 Score";
        $scope.abcd2="-";
        $scope.showInterpret = false;
        $scope.age = {value: false};
        $scope.sbp = {value: false};
        $scope.dbp = {value: false};
        $scope.unilateral = {value: false};
        $scope.speech = {value: false};
        $scope.ten = {value: false};
        $scope.hour = {value: false};
        $scope.diabetes = {value: false};
        
        $scope.calculate = function() {
            $scope.abcd2 = 0;
            
            if ($scope.age.value == true){
                $scope.abcd2 += 1;
            };
            if ($scope.sbp.value == true || $scope.dbp.value == true){
                $scope.abcd2 += 1;
            };
            if ($scope.unilateral.value == true){
                $scope.abcd2 += 2;
            } else if ($scope.speech.value == true){
                $scope.abcd2 += 1;
            };
            if ($scope.hour.value == true){
                $scope.abcd2 += 2;
            } else if ($scope.ten.value === false){
                $scope.abcd2 += 1;
            };
            if ($scope.diabetes.value == true){
                $scope.abcd2 += 1;
            };
            
            if ($scope.abcd2 <= 3){
                $scope.smartColor = "balanced";
            } else if ($scope.abcd2 <= 5){
                $scope.smartColor = "energized";
            } else if ($scope.abcd2 >= 6){
                $scope.smartColor = "assertive";
            };
        };
}]);

app.controller('qtcCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Corrected QT";
        $scope.qtc="-";
        $scope.showInterpret = false;


        $scope.calculate = function() {
            qt = document.getElementById("qt").value;
            rr = document.getElementById("rr").value/1000;
            $scope.qtc = roundToTwo(qt/Math.sqrt(rr)/1000);
            
            if ($scope.qtc > 0.44 || $scope.qtc < 0.30){
                $scope.smartColor = "assertive";
            } else{
                $scope.smartColor = "balanced";
            };
            
        };
}]);


app.controller('cgfCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Creatinine clearance";
        $scope.score="-";
        $scope.showInterpret = false;


        $scope.calculate = function() {
            age = document.getElementById("age").value;
            weight = document.getElementById("weight").value;
            creatinine = document.getElementById("creatinine").value;
            gender = document.getElementById("gender").value;
            
            if (gender == 1){
                $scope.score = roundToTwo(((140 - age) * weight * 0.85)/(72 * creatinine));
            } else if (gender == 2) {
                $scope.score = roundToTwo(((140 - age) * weight)/(72 * creatinine));
            };
            
            
            
            if ($scope.score > 90){
                $scope.smartColor = "balanced";
            } else {
                $scope.smartColor = "assertive";
            };
            
        };
}]);

app.controller('alsCtrl', ['$scope',
    function($scope) {
        $scope.pname = "ALS FRS-r";
        $scope.score = "-";
        $scope.showAlternative = false;
        $scope.calculate = function() {
            i1 =   parseFloat(document.getElementById("speech").value);
            i2 =   parseFloat(document.getElementById("salivation").value);
            i3 =   parseFloat(document.getElementById("swallowing").value);
            i4 =   parseFloat(document.getElementById("handwriting").value);
            i5 =   parseFloat(document.getElementById("utensils").value);
            i5b =  parseFloat(document.getElementById("utensilsAlternative").value);
            i6 =   parseFloat(document.getElementById("dressing").value);
            i7 =   parseFloat(document.getElementById("bed").value);
            i8 =   parseFloat(document.getElementById("walking").value);
            i9 =   parseFloat(document.getElementById("stairs").value);
            i10 =  parseFloat(document.getElementById("dyspnea").value);
            i11 =  parseFloat(document.getElementById("orthopnea").value);
            i12 =  parseFloat(document.getElementById("respIns").value);
            
            $scope.score = i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9 + i10 + i11 + i12;
            $scope.scoreAlt = i1 + i2 + i3 + i4 + i5b + i6 + i7 + i8 + i9 + i10 + i11 + i12;
                       
        };
        
}]);

app.controller('meldCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "MELD score";
        $scope.score="-";
        $scope.showInterpret = false;
        $scope.dialysis = {value: false};


        $scope.calculate = function() {
            creatinine = document.getElementById("creatinine").value;
            bilirubine = document.getElementById("bilirubine").value;
            inr = document.getElementById("inr").value;
            
            if ($scope.dialysis.value == true){
                creatinine = 4;
            };
            
            $scope.score = Math.round((0.957 * Math.log(creatinine) +
                                      0.378 * Math.log(bilirubine) +
                                      1.120 * Math.log(inr) +
                                      0.6431) * 10);
            
            
            if ($scope.score <= 19){
                $scope.smartColor = "balanced";
            } else if ($scope.score <= 39){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
          
        };
}]);

app.controller('timiCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "TIMI risk score";
        $scope.score="-";
        $scope.showInterpret = false;
        $scope.age = {value: false};
        $scope.asa = {value: false};
        $scope.angina = {value: false};
        $scope.st = {value: false};
        $scope.markers = {value: false};
        $scope.stenosis = {value: false};
        $scope.riskf1 = {value: false};
        $scope.riskf2 = {value: false};
        $scope.riskf3 = {value: false};
        $scope.riskf4 = {value: false};
        $scope.riskf5 = {value: false};
        $scope.riskf6 = {value: false};
        $scope.riskf7 = {value: false};
        
        
        $scope.calculate = function() {
            $scope.score = 0;
            $scope.riskf = false;
            $scope.riskfCount = 0;
            
            if ($scope.riskf1.value == true){
                $scope.riskfCount += 1;
            };
            
            if ($scope.riskf2.value == true || $scope.riskf3.value == true || $scope.riskf4.value == true){
                $scope.riskfCount += 1;
            };
            
            if ($scope.riskf5.value == true){
                $scope.riskfCount += 1;
            };
            
            if ($scope.riskf6.value == true){
                $scope.riskfCount += 1;
            };
            
            if ($scope.riskf7.value == true){
                $scope.riskfCount += 1;
            };
            
            if ($scope.riskfCount >= 3){
                $scope.riskf = true;
            };
            
            
            if ($scope.age.value == true){
                $scope.score += 1;
            };
            if ($scope.asa.value == true){
                $scope.score += 1;
            };
            if ($scope.angina.value == true){
                $scope.score += 1;
            };
            if ($scope.st.value == true){
                $scope.score += 1;
            };
            if ($scope.markers.value == true){
                $scope.score += 1;
            };
            if ($scope.stenosis.value == true){
                $scope.score += 1;
            };
            if ($scope.riskf == true){
                $scope.score += 1;
            };

            if ($scope.score <= 1){
                $scope.smartColor = "balanced";
            } else if ($scope.score <= 5){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
            
        };
}]);

app.controller('timi2Ctrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "TIMI risk score";
        $scope.score="-";
        $scope.showInterpret = false;
        $scope.age = {value: false};
        $scope.age2 = {value: false};
        $scope.hyper = {value: false};
        $scope.angina = {value: false};
        $scope.diabetes = {value: false};
        $scope.sbp = {value: false};
        $scope.hr = {value: false};
        $scope.killip = {value: false};
        $scope.weight = {value: false};
        $scope.anterior = {value: false};
        $scope.time = {value: false};
        
        
        $scope.calculate = function() {
            $scope.score = 0;
            $scope.crit3 = false;
            
            if ($scope.age.value == true){
                $scope.score += 2;
            } else if ($scope.age2.value == true) {
                $scope.score += 3;
            };
            
            if ($scope.diabetes.value == true || $scope.hyper.value == true || $scope.angina.value == true){
                $scope.score += 1;
            };
            
            if ($scope.sbp.value == true){
                $scope.score += 3;
            };
            
            if ($scope.hr.value == true){
                $scope.score += 2;
            };
            
            if ($scope.killip.value == true){
                $scope.score += 2;
            };
            
            if ($scope.weight.value == true){
                $scope.score += 1;
            };
            if ($scope.anterior.value == true){
                $scope.score += 1;
            };
            
            if ($scope.time.value == true){
                $scope.score += 1;
            };
            
            if ($scope.score <= 1){
                $scope.smartColor = "balanced";
            } else if ($scope.score <= 5){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
            
        };
}]);

app.controller('curb65Ctrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "CURB65";
        $scope.curb65 = 0;
        $scope.showInterpret = false;
        $scope.confusion = {value: false};
        $scope.bun = {value: false};
        $scope.respiratory = {value: false};
        $scope.pressure = {value: false};
        $scope.pressure2 = {value: false};
        $scope.age = {value: false};
        
        $scope.calculate = function() {
            $scope.curb65 = 0;
            
            if ($scope.confusion.value == true){
                $scope.curb65 += 1;
            };
            if ($scope.bun.value == true){
                $scope.curb65 += 1;
            };
            if ($scope.respiratory.value == true){
                $scope.curb65 += 1;
            };
            if ($scope.pressure.value == true || $scope.pressure2.value == true){
                $scope.curb65 += 1;
            };
            if ($scope.age.value == true){
                $scope.curb65 += 1;
            };
            
            if ($scope.curb65 <= 1){
                $scope.smartColor = "balanced";
            } else if ($scope.curb65 <= 3){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
        };
}]);

app.controller('ldlCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "LDL";
        $scope.ldl="-";
        $scope.showInterpret = false;

        $scope.calculate = function() {
            tc = document.getElementById("tc").value;
            hdl = document.getElementById("hdl").value;
            tri = document.getElementById("tri").value;
            $scope.ldl = roundToTwo(tc - hdl - (tri/5));
            
            if ($scope.ldl <= 70){
                $scope.smartColor = "balanced";
            } else if ($scope.ldl <= 160){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
        };
}]);

app.controller('cpsCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Child - Pugh score";
        $scope.score = "-";
        $scope.class = "";
        $scope.calculate = function() {
            $scope.notes = "";
            bilirubin = parseFloat(document.getElementById("bilirubin").value);
            albumin = parseFloat(document.getElementById("albumin").value);
            pt = parseFloat(document.getElementById("pt").value);
            ascites = parseFloat(document.getElementById("ascites").value);
            enc = parseFloat(document.getElementById("enc").value);
            $scope.score = bilirubin + albumin + pt + ascites + enc;
            
            if ($scope.score <= 6){
                $scope.class = "A";
                $scope.smartColor = "balanced";
            } else if ($scope.score <= 9){
                $scope.class = "B";
                $scope.smartColor = "energized";
            } else {
                $scope.class = "C";
                $scope.smartColor = "assertive";
            };
            
        };
        
}]);

app.controller('hisCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Hachinski Score";
        $scope.score="-";
        $scope.showInterpret = false;
        $scope.abrupt = {value: false};
        $scope.step = {value: false};
        $scope.fluctu = {value: false};
        $scope.night = {value: false};
        $scope.person = {value: false};
        $scope.depression = {value: false};
        $scope.somatic = {value: false};
        $scope.emotional = {value: false};
        $scope.hyper = {value: false};
        $scope.strokes = {value: false};
        $scope.arterio = {value: false};
        $scope.f1 = {value: false};
        $scope.f2 = {value: false};

        
        $scope.calculate = function() {
            $scope.score = 0;
            
            if ($scope.abrupt.value == true){
                $scope.score += 2;
            };
            
            if ($scope.step.value == true){
                $scope.score += 1;
            };
            
            if ($scope.fluctu.value == true){
                $scope.score += 2;
            };
            
            if ($scope.night.value == true){
                $scope.score += 1;
            };
            
            if ($scope.person.value == true){
                $scope.score += 1;
            };
            
            if ($scope.depression.value == true){
                $scope.score += 1;
            };
            
            if ($scope.somatic.value == true){
                $scope.score += 1;
            };
            
            if ($scope.emotional.value == true){
                $scope.score += 1;
            };
            
            if ($scope.hyper.value == true){
                $scope.score += 1;
            };
            
            if ($scope.strokes.value == true){
                $scope.score += 2;
            };
            
            if ($scope.arterio.value == true){
                $scope.score += 1;
            };
            
            if ($scope.f1.value == true){
                $scope.score += 2;
            };
            
            if ($scope.f2.value == true){
                $scope.score += 2;
            };
            
            if ($scope.score <= 4){
                $scope.smartColor = "assertive";
            } else if ($scope.score >= 7) {
                $scope.smartColor = "energized";
            } else{
                $scope.smartColor = "dark";
            };
        };
}]);

app.controller('tiffCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Tiffeneau - Pinelli index";
        $scope.tiff="-";
        $scope.showInterpret = false;

        $scope.calculate = function() {
            fev1 = document.getElementById("fev1").value;
            fvc = document.getElementById("fvc").value;
            $scope.tiff = roundToTwo(fev1/fvc);
            
        };
}]);

app.controller('apgarCtrl', ['$scope',
    function($scope) {
        $scope.smartColor = "assertive";
        $scope.pname = "Apgar Index";
        $scope.score = "-";
        $scope.calculate = function() {
            $scope.score = 0;
            app = parseFloat(document.getElementById("app").value);
            pulse = parseFloat(document.getElementById("pulse").value);
            reflex = parseFloat(document.getElementById("reflex").value);
            activity = parseFloat(document.getElementById("activity").value);
            respiration = parseFloat(document.getElementById("respiration").value);
            
            $scope.score = app + pulse + reflex + activity + respiration;
            
            if ($scope.score >= 7){
                $scope.smartColor = "balanced";
            } else if ($scope.score >= 4){
                $scope.smartColor = "energized";
            } else {
                $scope.smartColor = "assertive";
            };
            
        };
        
}]);