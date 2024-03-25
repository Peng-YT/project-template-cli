/*
 * @Author: 彭越腾
 * @Date: 2024-03-25 14:20:51
 * @LastEditors: 彭越腾
 * @LastEditTime: 2024-03-25 15:49:48
 * @FilePath: \project-template-cli\src\index.js
 * @Description: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const createJenkins = () => {

}
const createK8sYaml = () => {

}
const getDockerfileTpl = (type) => {

}
const getCommonTemplate = () => {

}
const getServerTemplate = () => {

}
const writeFile = (templates) => {

}
const createTemplate = (type) => {
    const templates = [getCommonTemplate(), getDockerfileTpl(type)]
    if(type === 'nodeServer') {
        createJenkins()
        createK8sYaml()
        templates.push(getServerTemplate())
    }
    writeFile(templates)
}