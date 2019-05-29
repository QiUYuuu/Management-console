<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">请确认</h4>
                </div>
                <div class="modal-body">
                    确定删除？
                </div>
                <div class="modal-footer">
                    <button @click="this.back" type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button @click="this.delete" type="button" class="btn btn-primary">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Delete",
        methods: {
            delete() {
                this.$ajax({
                    method: "get",
                    url: "http://localhost:2222/users/del",
                    params: {
                        id: this.$route.query.id
                    }
                }).then(res => {
                    if (res.data.code === 200) {
                        this.$router.push({
                            path: "/users"
                        });
                    }
                    e.preventDefault();
                });
                $('#myModal').modal('hide');
            },
            back() {
                this.$router.push({
                    path: "/users"
                });
            }
        }
        // created(){
        //     this.delete();
        // }
    }

</script>

<style scoped>
    .modal {
        height: 500px;
    }

</style>
