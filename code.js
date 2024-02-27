var a1 = gsap.timeline()

a1.to("#text2",{duration:0,opacity:0},0);
a1.fromTo("#verline1",{x:700,opacity:0,rotation:5},{x:840,rotation:0,ease:"circ.out",duration : 1.5,opacity:1},0);
a1.fromTo("#verline2",{x:1180,y:-1900,opacity:0,rotation:5},{x:1040,rotation:0,ease:"circ.out",duration : 1.5,opacity:1},0);
a1.to("#text1",{y:-205,ease:"expo.out",duration:1.3,opacity:1},0);
a1.to("#horline1",{y:-2230,ease:"circ.out",duration : 1.5,opacity:1},0);
a1.to("#horline2",{y:-2260,ease:"circ.out",duration : 1.5,opacity:1},0);
a1.to("#verline1",{x:200,ease:"circ.out",duration : 1.5,opacity:1},0.8);
a1.to("#verline2",{x:400,ease:"circ.out",duration : 1.5,opacity:1},0.8);
a1.to('#text1',{x:-640,ease:"circ.out",duration : 1.5},0.8)
a1.to("#text1",{x:300,ease:"expo.in",duration:1.3,opacity:1},2.3);
a1.to("#text1",{duration:0,opacity:0},3.6);
a1.to("#text2",{duration:0,opacity:1},3.6);
a1.fromTo("#text2",{x:-400},{duration:3,x:100,ease:"expo.out"},3.6);
a1.to("#horline1",{y:-2510,ease:"expo.out",duration:2},3.6);
a1.to("#horline2",{y:-2200,ease:"expo.out",duration:2},3.6);
a1.to("#verline1",{x:1200,ease:"circ.out",duration : 2,opacity:1},3.6);
a1.to("#verline2",{x:115,ease:"circ.out",duration : 2,opacity:1},3.6);

