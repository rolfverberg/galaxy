define("mvc/history/options-menu",["exports","underscore","utils/localization","mvc/ui/popup-menu","mvc/history/copy-dialog","mvc/webhooks"],function(e,t,a,r,l,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,a){return i.clone(c).filter(function(r){return!(e&&!r.anon)&&(!(!t&&r.purge)&&(r.href&&(r.href=a+r.href,r.target=r.target||"galaxy_main"),r.confirm&&(r.func=function(){confirm(r.confirm)&&(galaxy_main.location=r.href)}),!0))})}Object.defineProperty(e,"__esModule",{value:!0});var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(t),s=n(a),d=n(r),f=n(l),y=n(o),c=[{html:(0,s.default)("History Lists"),header:!0},{html:(0,s.default)("Saved Histories"),href:"histories/list",target:"_top"},{html:(0,s.default)("Histories Shared with Me"),href:"histories/list_shared",target:"_top"},{html:(0,s.default)("Current History"),header:!0,anon:!0},{html:(0,s.default)("Create New"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.createNewHistory()}},{html:(0,s.default)("Copy History"),func:function(){(0,f.default)(Galaxy.currHistoryPanel.model).done(function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,s.default)("Share or Publish"),href:"history/sharing"},{html:(0,s.default)("Show Structure"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.router&&Galaxy.router.push("/histories/show_structure")}},{html:(0,s.default)("Extract Workflow"),href:"workflow/build_from_current_history"},{html:(0,s.default)("Delete"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,s.default)("Really delete the current history?"))&&Galaxy.currHistoryPanel.model._delete().done(function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,s.default)("Delete Permanently"),purge:!0,anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,s.default)("Really delete the current history permanently? This cannot be undone."))&&Galaxy.currHistoryPanel.model.purge().done(function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,s.default)("Dataset Actions"),header:!0,anon:!0},{html:(0,s.default)("Copy Datasets"),href:"dataset/copy_datasets"},{html:(0,s.default)("Dataset Security"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.router&&Galaxy.router.push("/histories/permissions?id="+Galaxy.currHistoryPanel.model.id)}},{html:(0,s.default)("Resume Paused Jobs"),href:"history/resume_paused_jobs?current=True",anon:!0},{html:(0,s.default)("Collapse Expanded Datasets"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.collapseAll()}},{html:(0,s.default)("Unhide Hidden Datasets"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,s.default)("Really unhide all hidden datasets?"))&&$.post(Galaxy.root+"history/adjust_hidden",{user_action:"unhide"},function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,s.default)("Delete Hidden Datasets"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm((0,s.default)("Really delete all hidden datasets?"))&&$.post(Galaxy.root+"history/adjust_hidden",{user_action:"delete"},function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:(0,s.default)("Purge Deleted Datasets"),confirm:(0,s.default)("Really delete all deleted datasets permanently? This cannot be undone."),href:"history/purge_deleted_datasets",purge:!0,anon:!0},{html:(0,s.default)("Downloads"),header:!0},{html:(0,s.default)("Export Tool Citations"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.router&&Galaxy.router.push("/histories/citations?id="+Galaxy.currHistoryPanel.model.id)}},{html:(0,s.default)("Export History to File"),href:"history/export_archive?preview=True",anon:!0},{html:(0,s.default)("Other Actions"),header:!0},{html:(0,s.default)("Import from File"),href:"histories/import",target:"_top"}];y.default.load({type:"history-menu",async:!1,callback:function(e){var t=[];e.each(function(e){var a=e.toJSON();a.activate&&t.push({html:(0,s.default)(a.config.title),anon:!0})}),t.length>0&&(t.unshift({html:(0,s.default)("Webhooks"),header:!0}),$.merge(c,t))}});e.default=function(e,t){var a=u(void 0===(t=t||{}).anonymous||t.anonymous,t.purgeAllowed||!1,Galaxy.root);return new d.default(e,a)}});
//# sourceMappingURL=../../../maps/mvc/history/options-menu.js.map