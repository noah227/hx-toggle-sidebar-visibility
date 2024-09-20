var hx = require("hbuilderx");

const barCommand = "hx-toggle-sidebar-visibility.toggleSidebarVisibility"
const targetCommand = "workbench.action.toggleSidebarVisibility"
function updateStatusBar() {
	const barItem = hx.window.createStatusBarItem(hx.StatusBarAlignment.Left, 9999)
	barItem.text = "$(message)"
	// barItem.text = "🙄️"
	// barItem.color = "yellow"
	// barItem.color = "rgb(255, 0, 0)"
	// barItem.color = "#f00"
	barItem.command = barCommand
	barItem.tooltip = "切换项目管理器显示状态"
	barItem.show()
	return barItem
}

updateStatusBar() 
//该方法将在插件激活的时候调用
function activate(context) { 
	context.subscriptions.push(
		hx.commands.registerCommand(barCommand, () => {
			hx.commands.executeCommand(targetCommand)
		})
	);
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
	activate,
	deactivate
}

