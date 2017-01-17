//Global name space
var hbuddy = window.hbuddy || {};

hbuddy.config = {
    'lang': 'EN',
    services: {
        adminCandidateMock: '/mocks/admin-candidate-mock.json',
        adminRecruiterActiveData: '/mocks/admin-recruiter.json',
        recruiterInterviewerData: '/mocks/interviewer-mock.json',
        recruiterSessions : '/mocks/recruiter-session.json',    
        ldapServerUrl : '/mocks/index.json'           
    },
    templateUrl: {
        sessions : '/modules/sessions/views/sessions.html',
        candidates:'/modules/candidates/views/candidates.html',
        recruiters:'/modules/recruiters/views/recruiters.html',
        interviewers:'/modules/interviewers/views/interviewers.html',
      },    
    userTypes:
    {
        SystemAdmin:'modules/session/SysAdmin/',
        RecruiterAdmin:'modules/session/RecruiterAdmin',
        Recruiter:'modules/sessions/recruiter/views/recruiter-sessions.html'
    },
    jsonUrl:{
        interviewers: '/mocks/interviewer.json',
        sessions: '/mocks/session-',
        recruiters: '/mocks/recruiter-',
        candidates: '/mocks/candidate.json'
    },
        serviceUrl:{
        interviewers: '/mocks/interviewer.json',
        sessions: 'http://localhost:3000/sessionsData',
        recruiters: '/mocks/recruiter-',
        candidates: '/mocks/candidate.json'
    }
};
